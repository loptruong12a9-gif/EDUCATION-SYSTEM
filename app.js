// ============================================================
// APP.JS - Logic chính của App HỌC VUI CÙNG BÉ
// ============================================================

'use strict';

// ============================================================
// STATE MANAGEMENT
// ============================================================
const State = {
    currentStudent: null,   // 'thao' | 'diep'
    currentTab: 'today',
    calendarMonth: null,
    calendarYear: null,
    selectedDate: null,
    data: {},               // Loaded from localStorage

    load() {
        const saved = localStorage.getItem('hocVuiData');
        if (saved) {
            this.data = JSON.parse(saved);
        } else {
            this.data = {
                thao: { stars: 0, checkins: {}, hwDone: {}, unlockedRewards: [], inventory: [], messages: [], petExp: 0, badges: [] },
                hailinh: { stars: 0, checkins: {}, hwDone: {}, unlockedRewards: [], inventory: [], messages: [], petExp: 0, badges: [] },
                diep: { stars: 0, checkins: {}, hwDone: {}, unlockedRewards: [], inventory: [], messages: [], petExp: 0, badges: [] },
            };
        }
    },

    save() {
        localStorage.setItem('hocVuiData', JSON.stringify(this.data));
    },

    getStudentData(who) {
        if (!this.data[who]) {
            this.data[who] = { stars: 0, checkins: {}, hwDone: {}, unlockedRewards: [], inventory: [], messages: [], petExp: 0, badges: [] };
        }
        // Đảm bảo các trường mới luôn tồn tại (cho người dùng cũ)
        const d = this.data[who];
        if (!d.messages) d.messages = [];
        if (!d.badges) d.badges = [];
        if (d.petExp === undefined) d.petExp = 0;
        if (!d.inventory) d.inventory = [];

        return d;
    },

    addStar(who, count = 1) {
        const d = this.getStudentData(who);
        d.stars = (d.stars || 0) + count;
        this.save();
        this.checkBadges(who); // Tự động kiểm tra danh hiệu
        return d.stars;
    },

    // --- TIN NHẮN BÍ MẬT ---
    sendMessage(who, text) {
        const d = this.getStudentData(who);
        if (!d.messages) d.messages = [];
        d.messages.push({ text, date: new Date().toISOString(), read: false });
        this.save();
    },

    // --- DANH HIỆU & THÀNH TÍCH ---
    checkBadges(who) {
        const d = this.getStudentData(who);
        const badges = d.badges || [];
        const streak = this.getStreak(who);

        window.APP_DATA.BADGES.forEach(b => {
            if (badges.includes(b.id)) return;

            let unlocked = false;
            if (b.id === 'streak_3' && streak >= b.target) unlocked = true;
            if (b.id === 'stars_100' && d.stars >= b.target) unlocked = true;

            if (unlocked) {
                d.badges.push(b.id);
                // Có thể thêm thông báo chúc mừng ở đây
            }
        });
        this.save();
    },

    // --- THÚ CƯNG TIẾN HÓA ---
    addPetExp(who, amount = 10) {
        const d = this.getStudentData(who);
        d.petExp = (d.petExp || 0) + amount;
        this.save();
    },

    // --- SAO LƯU DỮ LIỆU ---
    exportData() {
        const dataStr = JSON.stringify(this.data);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `HocVui_Backup_${new Date().toLocaleDateString()}.json`;
        a.click();
    },

    importData(jsonContent) {
        try {
            const imported = JSON.parse(jsonContent);
            this.data = imported;
            this.save();
            location.reload();
        } catch (e) {
            alert("Lỗi: File dữ liệu không hợp lệ!");
        }
    },

    setCheckin(who, dateStr, done = true) {
        const d = this.getStudentData(who);
        d.checkins[dateStr] = done;
        this.save();
        this.addPetExp(who, 20); // Check-in tặng EXP cho thú cưng
        this.checkBadges(who);
    },

    isCheckedIn(who, dateStr) {
        const d = this.getStudentData(who);
        return !!(d.checkins && d.checkins[dateStr]);
    },

    getStreak(who) {
        const d = this.getStudentData(who);
        const checkins = d.checkins || {};
        let streak = 0;
        let curr = new Date();
        curr.setHours(0, 0, 0, 0);

        // Kiểm tra xem hôm nay hoặc hôm qua có checkin không
        const todayStr = Utils.toDateStr(curr.getFullYear(), curr.getMonth() + 1, curr.getDate());
        curr.setDate(curr.getDate() - 1);
        const yesterdayStr = Utils.toDateStr(curr.getFullYear(), curr.getMonth() + 1, curr.getDate());

        if (!checkins[todayStr] && !checkins[yesterdayStr]) return 0;

        // Nếu mới checkin hôm nay hoặc hôm qua, bắt đầu đếm ngược
        let checkDate = checkins[todayStr] ? new Date() : curr;
        while (true) {
            const dateStr = Utils.toDateStr(checkDate.getFullYear(), checkDate.getMonth() + 1, checkDate.getDate());
            if (checkins[dateStr]) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    },

    setHwDone(who, dateStr, idx, done) {
        const d = this.getStudentData(who);
        if (!d.hwDone[dateStr]) d.hwDone[dateStr] = {};
        d.hwDone[dateStr][idx] = done;
        this.save();
    },

    isHwDone(who, dateStr, idx) {
        const d = this.getStudentData(who);
        return !!(d.hwDone && d.hwDone[dateStr] && d.hwDone[dateStr][idx]);
    },

    saveBonusAnswer(who, dateStr, idx, value) {
        const d = this.getStudentData(who);
        if (!d.bonusAnswers) d.bonusAnswers = {};
        if (!d.bonusAnswers[dateStr]) d.bonusAnswers[dateStr] = {};
        d.bonusAnswers[dateStr][idx] = value;
        this.save();
    },

    getBonusAnswer(who, dateStr, idx) {
        const d = this.getStudentData(who);
        if (d.bonusAnswers && d.bonusAnswers[dateStr]) {
            return d.bonusAnswers[dateStr][idx] || '';
        }
        return '';
    },

    saveBonusScore(who, dateStr, score, total) {
        const d = this.getStudentData(who);
        if (!d.bonusScores) d.bonusScores = {};
        d.bonusScores[dateStr] = { score, total };
        this.save();
    },

    getBonusScore(who, dateStr) {
        const d = this.getStudentData(who);
        return (d.bonusScores && d.bonusScores[dateStr]) ? d.bonusScores[dateStr] : null;
    },

    buyItem(who, item) {
        const d = this.getStudentData(who);
        if (d.stars >= item.price) {
            if (!d.inventory) d.inventory = [];
            // Kiểm tra xem đã có món này chưa (nếu là pet) hoặc cộng dồn
            d.inventory.push(item.id);
            d.stars -= item.price;
            this.save();
            return true;
        }
        return false;
    },

    getPeriodStars(who, filter = 'month') {
        const sd = this.getStudentData(who);
        const now = new Date();
        const currMonth = now.getMonth() + 1;
        const currYear = now.getFullYear();
        let periodStars = 0;

        // 1. Stars from Check-ins (1 star per day)
        if (sd.checkins) {
            Object.entries(sd.checkins).forEach(([dateStr, done]) => {
                if (!done) return;
                const { year, month } = Utils.parseDate(dateStr);
                let match = false;
                if (filter === 'month' && month === currMonth && year === currYear) match = true;
                if (filter === 'quarter') {
                    const currQ = Math.floor((currMonth - 1) / 3);
                    const q = Math.floor((month - 1) / 3);
                    if (q === currQ && year === currYear) match = true;
                }
                if (filter === 'year' && year === currYear) match = true;
                if (match) periodStars += 1;
            });
        }

        // 2. Stars from Bonus Exercises (1 per correct answer)
        if (sd.bonusScores) {
            Object.entries(sd.bonusScores).forEach(([dateStr, s]) => {
                const { year, month } = Utils.parseDate(dateStr);
                let match = false;
                if (filter === 'month' && month === currMonth && year === currYear) match = true;
                if (filter === 'quarter') {
                    const currQ = Math.floor((currMonth - 1) / 3);
                    const q = Math.floor((month - 1) / 3);
                    if (q === currQ && year === currYear) match = true;
                }
                if (filter === 'year' && year === currYear) match = true;
                if (match) periodStars += s.score;
            });
        }

        // 3. Stars from Homework (+2 if all done) - simple estimate
        // In reality, we could track this more strictly, but for now we follow the bonus score pattern

        return periodStars;
    }
};

// ============================================================
// UTILITIES
// ============================================================
const Utils = {
    today() {
        const now = new Date();
        return {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate(),
            dow: now.getDay(), // 0=Sun, 1=Mon...
        };
    },

    toDateStr(year, month, day) {
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    },

    parseDate(str) {
        const [y, m, d] = str.split('-').map(Number);
        return { year: y, month: m, day: d };
    },

    getDayOfWeek(year, month, day) {
        return new Date(year, month - 1, day).getDay();
    },

    isHoliday(dateStr) {
        return window.APP_DATA.HOLIDAYS.some(h => h.date === dateStr);
    },

    getHolidayName(dateStr) {
        const h = window.APP_DATA.HOLIDAYS.find(h => h.date === dateStr);
        return h ? h.name : null;
    },

    isSchoolDay(year, month, day) {
        const dateStr = this.toDateStr(year, month, day);
        const dow = this.getDayOfWeek(year, month, day);
        if (dow === 0 || dow === 6) return false;
        if (this.isHoliday(dateStr)) return false;
        const cfg = window.APP_DATA.CONFIG;
        const start = new Date(cfg.schoolYearStart);
        const end = new Date(cfg.schoolYearEnd);
        const d = new Date(dateStr);
        const tetStart = new Date(cfg.tetBreakStart);
        const tetEnd = new Date(cfg.tetBreakEnd);
        if (d < start || d > end) return false;
        if (d >= tetStart && d <= tetEnd) return false;
        return true;
    },

    getWeekNumber(year, month, day) {
        // Tuần học (Tuần 1 = tuần chứa 5/9/2025)
        const target = new Date(year, month - 1, day);
        const schoolStart = new Date('2025-09-05');
        const diff = target - schoolStart;
        if (diff < 0) return null;
        const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
        return weeks + 1;
    },

    getMonthKey(year, month) {
        return `${year}-${String(month).padStart(2, '0')}`;
    },

    formatDate(year, month, day) {
        const dows = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dow = this.getDayOfWeek(year, month, day);
        return `${dows[dow]}, ${day}/${month}/${year}`;
    },

    randomPick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    getWeekDates(year, month, day) {
        const dates = [];
        const current = new Date(year, month - 1, day);
        const dayOfWeek = current.getDay(); // 0(Sun) - 6(Sat)

        // Chuyển sang Thứ 2 (Monday)
        const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const monday = new Date(current);
        monday.setDate(current.getDate() + mondayOffset);

        for (let i = 0; i < 7; i++) {
            const next = new Date(monday);
            next.setDate(monday.getDate() + i);
            dates.push(this.toDateStr(next.getFullYear(), next.getMonth() + 1, next.getDate()));
        }
        return dates;
    },

    normalizeText(text) {
        if (!text) return '';
        return text.toString()
            .toLowerCase()
            .normalize("NFC")
            .trim()
            .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") // Loại bỏ dấu câu
            .replace(/\s+/g, " "); // Chuyển nhiều khoảng trắng thành 1
    },

    isNearMatch(user, correct) {
        const u = this.normalizeText(user);
        const c = this.normalizeText(correct);
        if (!u || !c) return false;

        // 1. Khớp hoàn toàn sau khi chuẩn hóa
        if (u === c) return true;

        // 2. Xử lý trường hợp đáp án dài (câu văn)
        const uWords = u.split(' ');
        const cWords = c.split(' ');

        // Danh sách từ hư từ (stop words) tiếng Việt cơ bản để lọc khi so sánh ý nghĩa
        const stopWords = ['và', 'là', 'của', 'để', 'có', 'trong', 'với', 'cho', 'mà', 'thì', 'lên', 'cũng', 'được'];
        const filterWords = (arr) => arr.filter(w => !stopWords.includes(w) && w.length > 1);

        const uFiltered = filterWords(uWords);
        const cFiltered = filterWords(cWords);

        if (cFiltered.length >= 1) {
            // Kiểm tra xem người dùng có nhập đúng các từ quan trọng không
            let matchCount = 0;
            cFiltered.forEach(w => {
                if (u.includes(w)) matchCount++;
            });
            // Chỉ cần đúng 50% từ quan trọng là cho qua (tăng tính khích kệ cho bé)
            if (matchCount / cFiltered.length >= 0.5) return true;
        }

        // 3. Xử lý số và đơn vị (vd: 5kg và 5 kg)
        if (u.replace(/\s/g, "") === c.replace(/\s/g, "")) return true;

        // 4. Kiểm tra chứa chuỗi nếu câu trả lời đủ dài (từ 2 ký tự trở lên để thắt chặt nhưng vẫn linh hoạt)
        if (c.includes(u) && u.length >= 2) return true;
        if (u.includes(c) && c.length >= 2) return true;

        return false;
    }
};

// ============================================================
// SUBJECT CONFIG
// ============================================================
const SUBJECT_MAP = {
    'Tiếng Việt': '📖',
    'Toán': '🔢',
    'Đạo Đức': '💛',
    'Hoạt động trải nghiệm': '🎨',
    'Tự nhiên & Xã hội': '🌿',
    'Tiếng Anh': '🌍',
    'Nghệ thuật (Mỹ thuật)': '🖌️',
    'Nghệ thuật (Âm nhạc)': '🎵',
    'Giáo dục thể chất': '⚽',
    'Khoa học': '🔬',
    'Lịch sử & Địa lý': '🗺️',
    'Công nghệ': '⚙️',
    'Tin học': '💻',
};

// ============================================================
// CONTENT GENERATOR
// ============================================================
const ContentGen = {
    getWeekContent(studentKey, year, month, day) {
        const weekNum = Utils.getWeekNumber(year, month, day);
        if (!weekNum) return null;
        let sData;
        if (studentKey === 'thao') sData = window.APP_DATA.THAO;
        else if (studentKey === 'hailinh') sData = window.APP_DATA.HAILINH;
        else sData = window.APP_DATA.DIEP;
        const wc = sData.weeklyContent[weekNum];
        return wc || null;
    },

    getSchedule(studentKey, dow) {
        let sData;
        if (studentKey === 'thao') sData = window.APP_DATA.THAO;
        else if (studentKey === 'hailinh') sData = window.APP_DATA.HAILINH;
        else sData = window.APP_DATA.DIEP;
        return sData.schedule[dow] || [];
    },

    getTheme(studentKey, year, month) {
        let sData;
        if (studentKey === 'thao') sData = window.APP_DATA.THAO;
        else if (studentKey === 'hailinh') sData = window.APP_DATA.HAILINH;
        else sData = window.APP_DATA.DIEP;
        const key = Utils.getMonthKey(year, month);
        return sData.themes[key] || '🌟 Học tập vui vẻ';
    },

    getHomework(studentKey, year, month, day) {
        const weekContent = this.getWeekContent(studentKey, year, month, day);
        if (!weekContent) return [];
        const dow = Utils.getDayOfWeek(year, month, day);
        const hw = [];

        if (studentKey === 'thao' || studentKey === 'hailinh') {
            const map = {
                1: `Đọc và học thuộc bài Tiếng Việt: "${weekContent.tviet}"`,
                2: `Làm Toán SGK: ${weekContent.toan}`,
                3: `Ôn bài Tiếng Việt + Chuẩn bị TN&XH: "${weekContent.tnxh}"`,
                4: `Hoàn thành bài Toán: ${weekContent.toan}`,
                5: `Ôn bài toàn tuần + Đọc SGK bài mới`,
            };
            if (map[dow]) hw.push(map[dow]);
            if (dow === 2 || dow === 4) hw.push(`Học từ vựng Tiếng Anh (5-10 từ mới)`);
            if (dow === 1) hw.push(`Đạo đức: ${weekContent.daoduc || 'Ôn bài cũ'}`);
        } else {
            const map = {
                1: `Đọc và tóm tắt bài TV: "${weekContent.tviet}"`,
                2: `Làm Toán SGK trang 15-16: ${weekContent.toan}`,
                3: `Hoàn thành Khoa học: ${weekContent.khoahoc}`,
                4: `Ôn bài Toán + Học từ vựng Tiếng Anh`,
                5: `Ôn Lịch sử & Địa lý: ${weekContent.lsdia}`,
            };
            if (map[dow]) hw.push(map[dow]);
            if (dow === 1) hw.push('Viết đoạn văn ngắn theo chủ đề tuần này (5-7 câu)');
            if (dow === 3) hw.push('Vẽ sơ đồ / bản đồ theo bài Khoa học');
        }
        return hw.filter(Boolean);
    },

    getBonusExercises(studentKey, year, month, day) {
        let sData;
        if (studentKey === 'thao') sData = window.APP_DATA.THAO;
        else if (studentKey === 'hailinh') sData = window.APP_DATA.HAILINH;
        else sData = window.APP_DATA.DIEP;

        const bonus = sData.bonusExercises;
        const dow = Utils.getDayOfWeek(year, month, day);
        const dateStr = Utils.toDateStr(year, month, day);
        const allPossible = [];

        // Chọn môn học theo ngày
        const dayMap = {
            1: ['tiengviet', 'toan'],
            2: ['toan', (studentKey === 'thao' || studentKey === 'hailinh') ? 'tnxh' : 'khoahoc'],
            3: ['tiengviet', (studentKey === 'thao' || studentKey === 'hailinh') ? 'tnxh' : 'khoahoc'],
            4: ['english', 'toan'],
            5: [(studentKey === 'thao' || studentKey === 'hailinh') ? 'tnxh' : 'lsdia', 'tiengviet'],
        };

        const subjects = dayMap[dow] || ['toan', 'tiengviet'];

        subjects.forEach(sub => {
            if (bonus[sub]) {
                bonus[sub].forEach((ex, idx) => {
                    allPossible.push({ ...ex, subject: sub, originalIdx: idx });
                });
            }
        });

        // Sử dụng một hàm băm đơn giản từ dateStr để chọn bài tập cố định cho ngày đó
        const seed = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const seededRandom = (s) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };

        // Trộn và lấy 15 bài cố định cho ngày
        const result = [];
        const pool = [...allPossible];
        for (let i = 0; i < 15 && pool.length > 0; i++) {
            const r = seededRandom(seed + i);
            const idx = Math.floor(r * pool.length);
            result.push(pool.splice(idx, 1)[0]);
        }

        return result;
    },
};

// ============================================================
// UI RENDERER
// ============================================================
const UI = {
    // --- HOME SCREEN ---
    renderHome() {
        const thaoData = State.getStudentData('thao');
        const hailinhData = State.getStudentData('hailinh');
        const diepData = State.getStudentData('diep');

        document.getElementById('thaoStars').textContent = thaoData.stars || 0;
        document.getElementById('hailinhStars').textContent = hailinhData.stars || 0;
        document.getElementById('diepStars').textContent = diepData.stars || 0;

        document.getElementById('thaoStreak').textContent = State.getStreak('thao');
        document.getElementById('hailinhStreak').textContent = State.getStreak('hailinh');
        document.getElementById('diepStreak').textContent = State.getStreak('diep');
    },

    // --- STUDENT SCREEN ---
    renderStudentScreen(studentKey) {
        let sd;
        if (studentKey === 'thao') sd = window.APP_DATA.THAO;
        else if (studentKey === 'hailinh') sd = window.APP_DATA.HAILINH;
        else sd = window.APP_DATA.DIEP;

        const el = document.getElementById('studentScreen');
        el.className = `screen active student-${studentKey}`;

        // UPDATE THEME COLORS DYNAMICALLY
        document.documentElement.style.setProperty('--theme-main', sd.color);
        document.documentElement.style.setProperty('--theme-light', sd.colorLight);
        document.documentElement.style.setProperty('--theme-shadow', `${sd.color}4D`); // 30% alpha
        document.documentElement.style.setProperty('--theme-grad', `linear-gradient(135deg, ${sd.color}, var(--purple))`);

        // UPDATE MASCOT
        const mascotEmoji = document.querySelector('.mascot-emoji');
        const mascotTalk = document.getElementById('mascotTalk');
        if (mascotEmoji) mascotEmoji.textContent = sd.mascot || '🐱';
        if (mascotTalk) mascotTalk.textContent = `Chào ${sd.shortName || sd.name.split(' ').pop()} nha!`;

        document.getElementById('studentName').textContent = sd.name;
        document.getElementById('studentGrade').textContent = `Lớp ${sd.grade} - Năm học 2025-2026`;
        document.getElementById('topbarEmoji').textContent = sd.emoji;

        // Reset Parent tab if switching
        document.getElementById('parentDashboard').style.display = 'none';
        document.getElementById('parentLock').style.display = 'block';
        document.getElementById('parentPin').value = '';

        this.updateTopbarStars();
        this.renderToday();
        this.renderSecretMessages();
        this.renderTrivia();
    },

    updateTopbarStars() {
        const sd = State.getStudentData(State.currentStudent);
        document.getElementById('topbarStars').textContent = sd.stars || 0;
        document.getElementById('topbarStreak').textContent = State.getStreak(State.currentStudent);
    },

    // --- TODAY TAB ---
    renderToday(year, month, day) {
        const t = Utils.today();
        if (!year) year = t.year;
        if (!month) month = t.month;
        if (!day) day = t.day;

        const dateStr = Utils.toDateStr(year, month, day);
        const dow = Utils.getDayOfWeek(year, month, day);
        const studentKey = State.currentStudent;
        const isToday = (year === t.year && month === t.month && day === t.day);

        // Date display
        document.getElementById('todayDateLabel').textContent = Utils.formatDate(year, month, day);
        document.getElementById('todayBadge').textContent = isToday ? '📅 Hôm Nay' : '📅 Ngày Đã Chọn';

        // Theme & Quote
        const theme = ContentGen.getTheme(studentKey, year, month);
        document.getElementById('themeContent').textContent = theme;

        const quote = Utils.randomPick(window.APP_DATA.QUOTES) || 'Cố gắng mỗi ngày nhé!';
        const sd = State.getStudentData(studentKey) || {};
        const studentDisplayName = sd.shortName || (sd.name ? sd.name.split(' ').pop() : 'Bé');
        const personalizedQuote = quote.replace(/{name}/g, studentDisplayName);
        document.getElementById('quoteText').textContent = personalizedQuote;

        this.renderTrivia();
        this.renderSecretMessages();

        // Check school day
        const isSchool = Utils.isSchoolDay(year, month, day);
        const holidayName = Utils.getHolidayName(dateStr);

        // Week info
        const weekNum = Utils.getWeekNumber(year, month, day);
        const weekContent = weekNum ? ContentGen.getWeekContent(studentKey, year, month, day) : null;
        if (weekContent) {
            document.getElementById('weekInfoBanner').style.display = 'flex';
            document.getElementById('weekInfoText').textContent = weekContent.week;
        } else {
            document.getElementById('weekInfoBanner').style.display = 'none';
        }

        // Content sections
        const schoolSection = document.getElementById('schoolSection');
        const hwSection = document.getElementById('hwSection');
        const bonusSection = document.getElementById('bonusSection');
        const checkinCard = document.getElementById('checkinCard');
        const notSchoolAlert = document.getElementById('notSchoolAlert');

        if (!isSchool) {
            schoolSection.style.display = 'none';
            hwSection.style.display = 'none';
            bonusSection.style.display = 'none';
            notSchoolAlert.style.display = 'block';
            checkinCard.style.display = 'none';

            if (dow === 0 || dow === 6) {
                notSchoolAlert.innerHTML = `
          <div class="weekend-alert">
            🏖️ <strong>Cuối tuần!</strong><br>
            Hôm nay nghỉ học, vui chơi và nghỉ ngơi nhé! 😄<br>
            <small>Chuẩn bị sách vở sẵn sàng cho tuần mới nhé!</small>
          </div>`;
            } else if (holidayName) {
                notSchoolAlert.innerHTML = `
          <div class="holiday-alert">
            🎉 <strong>${holidayName}</strong><br>
            Hôm nay là ngày lễ, không có học! Vui vẻ nhé! 🎊
          </div>`;
            } else {
                notSchoolAlert.innerHTML = `
          <div class="holiday-alert">
            📭 Hôm nay không có lịch học.
          </div>`;
            }
            return;
        }

        // School day content
        notSchoolAlert.style.display = 'none';
        schoolSection.style.display = 'block';
        hwSection.style.display = 'block';
        bonusSection.style.display = 'block';
        checkinCard.style.display = 'block';

        // Bỏ collapsed để nội dung hiện ra
        schoolSection.classList.remove('collapsed');
        hwSection.classList.remove('collapsed');
        bonusSection.classList.remove('collapsed');

        // 1. School subjects
        const schedule = ContentGen.getSchedule(studentKey, dow);
        const subjectList = document.getElementById('subjectList');
        subjectList.innerHTML = '';
        schedule.forEach(item => {
            const emoji = SUBJECT_MAP[item.subject] || '📖';
            const detail = weekContent ? this.getSubjectDetail(studentKey, item.subject, weekContent) : '';
            subjectList.innerHTML += `
        <div class="subject-item">
          <span class="subject-emoji">${emoji}</span>
          <div class="subject-info">
            <div class="subject-name">${item.subject} <span style="opacity:0.6;font-size:12px">(${item.duration})</span></div>
            ${detail ? `<div class="subject-detail">${detail}</div>` : ''}
          </div>
        </div>`;
        });

        // 2. Homework
        const hwList = ContentGen.getHomework(studentKey, year, month, day);
        const hwContainer = document.getElementById('hwList');
        hwContainer.innerHTML = '';
        hwList.forEach((hw, idx) => {
            const done = State.isHwDone(studentKey, dateStr, idx);
            hwContainer.innerHTML += `
        <div class="hw-item">
          <div class="hw-check ${done ? 'done' : ''}" onclick="App.toggleHw('${dateStr}', ${idx}, this)" id="hw_${dateStr}_${idx}">
            ${done ? '✓' : ''}
          </div>
          <div class="hw-text ${done ? 'done' : ''}" id="hwt_${dateStr}_${idx}">${hw}</div>
        </div>`;
        });
        if (hwList.length === 0) {
            hwContainer.innerHTML = `<div class="empty-state"><div class="empty-emoji">🎉</div><p>Hôm nay không có bài tập về nhà!</p></div>`;
        }

        // 3. Bonus exercises
        const bonusExercises = ContentGen.getBonusExercises(studentKey, year, month, day);
        const bonusContainer = document.getElementById('bonusList');
        bonusContainer.innerHTML = '';

        const scoreData = State.getBonusScore(studentKey, dateStr);
        if (scoreData) {
            bonusContainer.innerHTML += `
        <div class="bonus-score-summary">
          🎯 Điểm bài tập bổ sung: <strong>${scoreData.score}/${scoreData.total}</strong>
          ${scoreData.score === scoreData.total ? ' 🏆 Xuất sắc!' : ''}
        </div>`;
        }

        bonusExercises.forEach((ex, idx) => {
            const savedAns = State.getBonusAnswer(studentKey, dateStr, idx);
            bonusContainer.innerHTML += `
        <div class="bonus-item">
          <div class="bonus-qnum">${idx + 1}</div>
          <div class="bonus-question">${ex.question}</div>
          ${ex.image ? `<img src="${ex.image}" class="bonus-image" alt="minh họa">` : ''}
          ${ex.hint ? `<div class="bonus-hint">💡 Gợi ý: ${ex.hint}</div>` : ''}
          
          <div class="bonus-input-group">
            <input type="text" class="bonus-input" id="input_bonus_${idx}" 
                   placeholder="Nhập câu trả lời..." value="${savedAns || ''}"
                   oninput="App.saveBonusAnswer('${dateStr}', ${idx}, this.value)">
            <button class="btn-voice" onclick="App.startVoice('input_bonus_${idx}', '${dateStr}', ${idx})" title="Nói câu trả lời">🎤</button>
            <button class="btn-check-bonus" onclick="App.checkBonus(${idx}, '${ex.answer.replace(/'/g, "\\'")}', '${dateStr}', '${ex.subject}')">Kiểm tra</button>
          </div>
          <div class="bonus-result" id="res_bonus_${idx}"></div>

          <button class="btn-show-answer" id="btn_show_ans_${idx}" 
                  style="margin-top:12px; display: ${savedAns ? 'inline-block' : 'none'}" 
                  onclick="this.style.display='none'; document.getElementById('ans_${idx}').classList.add('visible')">
            👁️ Xem đáp án gợi ý
          </button>
          <div class="bonus-answer" id="ans_${idx}">✅ Đáp án gợi ý: ${ex.answer}</div>
        </div>`;
        });

        if (bonusExercises.length === 0) {
            bonusContainer.innerHTML = `<div class="empty-state"><div class="empty-emoji">🧩</div><p>Hôm nay không có bài tập bổ sung!</p></div>`;
        }


        // 4. Check-in button
        const checkedIn = State.isCheckedIn(studentKey, dateStr);
        const btnCheckin = document.getElementById('btnCheckin');
        if (checkedIn) {
            btnCheckin.innerHTML = '✅ Em đã học xong hôm nay! +⭐';
            btnCheckin.classList.add('done');
            // Không set disabled để nút vẫn "ấn được" và hiện mini praise
        } else {
            btnCheckin.innerHTML = '✅ Em đã học xong hôm nay!';
            btnCheckin.classList.remove('done');
        }
        btnCheckin.dataset.date = dateStr;

        // 5. Parent summary
        this.renderParentSummary(year, month, day);
    },

    renderParentSummary(year, month, day) {
        const studentKey = State.currentStudent;
        const weekDates = Utils.getWeekDates(year, month, day);
        const container = document.getElementById('parentStatsBody');
        container.innerHTML = '<div class="weekly-stats-list"></div>';
        const list = container.querySelector('.weekly-stats-list');

        weekDates.forEach(dateStr => {
            const { year: y, month: m, day: d } = Utils.parseDate(dateStr);
            const dow = Utils.getDayOfWeek(y, m, d);
            const dows = ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'];
            const dayLabel = `Thứ ${dows[dow]} (${d}/${m})`;

            const scoreData = State.getBonusScore(studentKey, dateStr);
            const checkedIn = State.isCheckedIn(studentKey, dateStr);

            const pct = scoreData ? (scoreData.score / scoreData.total) * 100 : 0;
            const scoreLabel = scoreData ? `${scoreData.score}/${scoreData.total}` : '--';

            list.innerHTML += `
        <div class="weekly-stats-row">
          <div class="stats-day">${dayLabel}</div>
          <div class="stats-score">${scoreLabel}</div>
          <div class="stats-progress-bg">
            <div class="stats-progress-fill" style="width: ${pct}%"></div>
          </div>
          <div class="stats-checkin">${checkedIn ? '✅' : '⚪'}</div>
        </div>`;
        });
    },

    getSubjectDetail(studentKey, subject, weekContent) {
        if (!weekContent) return '';
        const map = {
            'Tiếng Việt': weekContent.tviet,
            'Toán': weekContent.toan,
            'Tự nhiên & Xã hội': weekContent.tnxh,
            'Đạo Đức': weekContent.daoduc,
            'Khoa học': weekContent.khoahoc,
            'Lịch sử & Địa lý': weekContent.lsdia,
            'Tiếng Anh': weekContent.english,
            'Công nghệ': weekContent.congnghe,
            'Tin học': weekContent.tinhoc,
        };
        return map[subject] || '';
    },

    // --- CALENDAR TAB ---
    renderCalendar() {
        const t = Utils.today();
        let year = State.calendarYear || t.year;
        let month = State.calendarMonth || t.month;
        State.calendarYear = year;
        State.calendarMonth = month;

        const months = ['', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
        document.getElementById('calMonthTitle').textContent = `${months[month]} ${year}`;

        const firstDay = new Date(year, month - 1, 1).getDay();
        const totalDays = new Date(year, month, 0).getDate();
        const t2 = Utils.today();

        let html = '';
        // Empty cells for start
        const startOffset = firstDay === 0 ? 6 : firstDay - 1;
        for (let i = 0; i < startOffset; i++) {
            html += `<div class="day-cell empty"></div>`;
        }

        for (let d = 1; d <= totalDays; d++) {
            const dateStr = Utils.toDateStr(year, month, d);
            const dow = Utils.getDayOfWeek(year, month, d);
            const isToday = (year === t2.year && month === t2.month && d === t2.day);
            const isWeekend = dow === 0 || dow === 6;
            const isHoliday = Utils.isHoliday(dateStr);
            const isSchool = Utils.isSchoolDay(year, month, d);
            const hasCheckin = State.isCheckedIn(State.currentStudent, dateStr);
            const bonusScore = State.getBonusScore(State.currentStudent, dateStr);
            const isSelected = State.selectedDate === dateStr;

            let cls = 'day-cell';
            if (isToday) cls += ' today';
            else if (isSelected) cls += ' selected';
            else if (isHoliday) cls += ' holiday';
            else if (isWeekend) cls += ' weekend';
            else if (!isSchool) cls += ' no-school';

            if (hasCheckin) cls += ' has-checkin';

            const clickable = isSchool ? `onclick="App.selectDay('${dateStr}')"` : '';
            const title = isHoliday ? Utils.getHolidayName(dateStr) : '';

            let scoreHtml = '';
            if (bonusScore) {
                scoreHtml = `<div class="cal-score">${bonusScore.score}/${bonusScore.total}</div>`;
            }

            html += `<div class="${cls}" ${clickable} title="${title}">${d}${scoreHtml}</div>`;
        }

        document.getElementById('calDaysGrid').innerHTML = html;

        // If a day is selected, show its detail
        if (State.selectedDate) {
            this.renderDayDetail(State.selectedDate);
        }
    },

    renderDayDetail(dateStr) {
        const { year, month, day } = Utils.parseDate(dateStr);
        const dayDetail = document.getElementById('dayDetail');
        dayDetail.style.display = 'block';
        document.getElementById('dayDetailTitle').textContent = Utils.formatDate(year, month, day);

        if (!Utils.isSchoolDay(year, month, day)) {
            document.getElementById('dayDetailContent').innerHTML = `
        <div class="empty-state">
          <div class="empty-emoji">🌙</div>
          <p>Ngày này không có học. Nghỉ ngơi vui vẻ nhé!</p>
        </div>`;
            return;
        }

        const studentKey = State.currentStudent;
        const dow = Utils.getDayOfWeek(year, month, day);
        const schedule = ContentGen.getSchedule(studentKey, dow);
        const weekContent = ContentGen.getWeekContent(studentKey, year, month, day);
        const checkedIn = State.isCheckedIn(studentKey, dateStr);

        let html = '<div class="subject-list">';
        schedule.forEach(item => {
            const emoji = SUBJECT_MAP[item.subject] || '📖';
            const detail = weekContent ? UI.getSubjectDetail(studentKey, item.subject, weekContent) : '';
            html += `
        <div class="subject-item">
          <span class="subject-emoji">${emoji}</span>
          <div class="subject-info">
            <div class="subject-name">${item.subject}</div>
            ${detail ? `<div class="subject-detail">${detail}</div>` : ''}
          </div>
        </div>`;
        });
        html += '</div>';

        html += `<div style="margin-top:12px; text-align:center; font-size:14px; font-weight:700; color:${checkedIn ? 'var(--green)' : 'var(--text-secondary)'}">
      ${checkedIn ? '✅ Em đã học hôm này!' : '⏳ Chưa check-in'}
    </div>`;

        document.getElementById('dayDetailContent').innerHTML = html;
    },

    // --- REWARDS TAB ---
    renderRewards() {
        const studentKey = State.currentStudent;
        const sData = State.getStudentData(studentKey);
        const stars = sData.stars || 0;
        const rewards = window.APP_DATA.REWARDS;

        document.getElementById('rewardStarsCount').textContent = stars;

        // Progress to next reward
        const nextReward = rewards.find(r => r.stars > stars);
        if (nextReward) {
            const prevReward = rewards.filter(r => r.stars <= stars).pop();
            const prevStars = prevReward ? prevReward.stars : 0;
            const pct = Math.min(100, Math.round(((stars - prevStars) / (nextReward.stars - prevStars)) * 100));
            document.getElementById('rewardProgressBar').style.width = pct + '%';
            document.getElementById('rewardProgressText').textContent =
                `Còn ${nextReward.stars - stars} ⭐ nữa để mở "${nextReward.name}"`;
        } else {
            document.getElementById('rewardProgressBar').style.width = '100%';
            document.getElementById('rewardProgressText').textContent = '🏆 Em đã mở khóa tất cả phần thưởng!';
        }

        // Rewards grid
        const grid = document.getElementById('rewardsGrid');
        grid.innerHTML = '';
        rewards.forEach(r => {
            const unlocked = stars >= r.stars;
            grid.innerHTML += `
        <div class="reward-item ${unlocked ? 'unlocked' : 'locked'}">
          ${unlocked ? '<div class="reward-unlock-badge">✓</div>' : ''}
          <span class="reward-emoji">${r.emoji}</span>
          <div class="reward-name">${r.name}</div>
          <div class="reward-stars">${r.stars} ⭐</div>
          <div class="reward-desc">${unlocked ? r.desc : '🔒 Cần thêm sao'}</div>
        </div>`;
        });

        this.renderBadges();
    },

    // --- TRIVIA & SECRET MESSAGES ---
    renderTrivia() {
        const triviaEl = document.getElementById('triviaText');
        if (!triviaEl) return;
        const trivia = Utils.randomPick(window.APP_DATA.TRIVIA);
        triviaEl.textContent = trivia.fact;
        // Có thể bổ sung topic vào tiêu đề nếu muốn: document.getElementById('triviaLabel').textContent = `💡 Bé có biết? (${trivia.topic})`;
    },

    renderSecretMessages() {
        const student = State.currentStudent;
        const sd = State.getStudentData(student);
        const banner = document.getElementById('secretMessageBanner');
        const textEl = document.getElementById('secretMessageText');
        if (!banner || !textEl) return;
        const messages = sd.messages || [];
        const unread = messages.find(m => !m.read);
        if (unread) {
            banner.classList.remove('hidden');
            textEl.textContent = unread.text;
            unread.read = true; // Xem là đã đọc
            State.save();
        } else {
            banner.classList.add('hidden');
        }
    },

    renderBadges() {
        const list = document.getElementById('badgesList');
        if (!list) return;
        list.innerHTML = '';
        const sd = State.getStudentData(State.currentStudent);
        const earned = sd.badges || [];
        window.APP_DATA.BADGES.forEach(b => {
            const isEarned = earned.includes(b.id);
            list.innerHTML += `
                <div class="badge-item ${isEarned ? '' : 'locked'}">
                    <span class="badge-emoji">${b.emoji}</span>
                    <div class="badge-name">${b.name}</div>
                    <div class="badge-popup">${b.desc}</div>
                </div>`;
        });
    },

    // --- LEADERBOARD ---
    renderLeaderboard() {
        const students = ['thao', 'hailinh', 'diep'];
        const entries = students.map(k => {
            const sd = State.getStudentData(k);
            const info = (k === 'thao') ? window.APP_DATA.THAO : (k === 'hailinh' ? window.APP_DATA.HAILINH : window.APP_DATA.DIEP);
            return {
                key: k,
                name: info.name,
                grade: `🏫 Lớp ${info.grade}`,
                emoji: info.emoji,
                stars: sd.stars || 0,
                monthlyStars: State.getPeriodStars(k, 'month')
            };
        });

        // 1. Render All-Time Total
        const totalEntries = [...entries].sort((a, b) => b.stars - a.stars);
        const lb = document.getElementById('leaderboardList');
        if (lb) {
            lb.innerHTML = '';
            totalEntries.forEach((e, i) => {
                const ranks = ['🥇', '🥈', '🥉'];
                const rankEmoji = ranks[i] || '🎖️';
                lb.innerHTML += `
                    <div class="lb-item rank-${i + 1}">
                        <div class="lb-rank">${rankEmoji}</div>
                        <div class="lb-avatar">${e.emoji}</div>
                        <div class="lb-info">
                            <div class="lb-name">${e.name} ${e.key === State.currentStudent ? '(Em)' : ''}</div>
                            <div class="lb-grade">${e.grade}</div>
                        </div>
                        <div class="lb-stars">⭐ ${e.stars}</div>
                    </div>`;
            });
        }

        // 2. Render Monthly Competition
        const monthlyEntries = [...entries].sort((a, b) => b.monthlyStars - a.monthlyStars);
        const mlb = document.getElementById('monthlyLeaderboardList');
        if (mlb) {
            mlb.innerHTML = '';
            monthlyEntries.forEach((e, i) => {
                const med = i === 0 ? '👑' : (i === 1 ? '🌟' : '✨');
                mlb.innerHTML += `
                    <div class="lb-item ${i === 0 ? 'rank-1' : ''}" style="border-radius:12px; margin-bottom:8px">
                        <div class="lb-rank">${med}</div>
                        <div class="lb-avatar">${e.emoji}</div>
                        <div class="lb-info">
                            <div class="lb-name" style="font-size:15px">${e.name}</div>
                            <div class="lb-grade" style="font-size:11px">Đua top tháng 3</div>
                        </div>
                        <div class="lb-stars" style="color:var(--orange)">+${e.monthlyStars} ⭐</div>
                    </div>`;
            });
        }
    },

    // --- SHOP TAB ---
    renderShop() {
        const studentKey = State.currentStudent;
        const d = State.getStudentData(studentKey);
        const stars = d.stars || 0;

        const starsCountEl = document.getElementById('shopStarsCount');
        if (starsCountEl) starsCountEl.textContent = stars;

        const shopGrid = document.getElementById('shopGrid');
        if (!shopGrid) return;
        shopGrid.innerHTML = '';

        window.APP_DATA.SHOP_ITEMS.forEach(item => {
            const inv = d.inventory || [];
            const hasItem = inv.includes(item.id);
            shopGrid.innerHTML += `
                <div class="shop-item">
                    <span class="item-emoji">${item.emoji}</span>
                    <span class="item-name">${item.name}</span>
                    <div class="item-price">⭐ ${item.price}</div>
                    <button class="btn-buy" ${hasItem ? 'disabled style="background:#ccc"' : ''} 
                            onclick="App.buyItem('${item.id}')">
                        ${hasItem ? 'Đã sở hữu' : 'Mua ngay'}
                    </button>
                </div>`;
        });

        this.renderInventory();
    },

    renderInventory() {
        const studentKey = State.currentStudent;
        const d = State.getStudentData(studentKey);
        const inv = d.inventory || [];
        const invGrid = document.getElementById('inventoryGrid');
        if (!invGrid) return;
        invGrid.innerHTML = '';

        if (inv.length === 0) {
            invGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; opacity:0.6; font-size:13px">Em chưa có món đồ nào. Hãy tích sao để mua nhé!</p>';
            return;
        }

        inv.forEach(itemId => {
            const item = window.APP_DATA.SHOP_ITEMS.find(i => i.id === itemId);
            if (item) {
                let levelHtml = '';
                if (itemId.includes('pet_')) {
                    const level = Math.floor((d.petExp || 0) / 100) + 1;
                    levelHtml = `<div style="font-size:9px;color:var(--theme-main);font-weight:900">Cấp ${level}</div>`;
                }
                invGrid.innerHTML += `
                    <div class="inventory-item" style="text-align:center">
                        <span class="item-emoji" style="font-size:24px;display:block">${item.emoji}</span>
                        <span class="item-name" style="font-size:11px;font-weight:700">${item.name}</span>
                        ${levelHtml}
                    </div>`;
            }
        });
    },

    // --- RELAX TAB ---
    renderRelax() {
        const audio = window.APP_DATA.AUDIO_LIBRARY;
        const mList = document.getElementById('musicList');
        const sList = document.getElementById('storyList');

        if (mList) {
            mList.innerHTML = '';
            audio.music.forEach(m => {
                let icon = '🎵';
                if (m.id.includes('lofi')) icon = '🎧';
                if (m.id.includes('piano')) icon = '🎹';
                if (m.id.includes('nature')) icon = '🌿';
                if (m.id.includes('classic')) icon = '🎻';

                mList.innerHTML += `
                    <div class="audio-card" data-url="${m.url}" onclick="App.playAudio('${m.url}', '${m.name}', '${icon}')">
                        <div class="audio-card-main">
                            <span class="play-icon">${icon}</span>
                            <div class="audio-info">
                                <div class="audio-name">${m.name}</div>
                                <div class="audio-desc">${m.desc}</div>
                            </div>
                            <span class="btn-play-mini">▶️</span>
                        </div>
                        <div class="card-controls-inner">
                            <span style="font-size:12px">🔈</span>
                            <input type="range" class="card-vol-slider" min="0" max="1" step="0.05" value="0.35" 
                                   onclick="event.stopPropagation()" 
                                   oninput="App.changeVolume(this.value)">
                            <button class="btn-stop-mini" onclick="event.stopPropagation(); App.stopAudio()">Dừng</button>
                        </div>
                        <div class="playing-wave"></div>
                    </div>`;
            });
        }

        if (sList) {
            sList.innerHTML = '';
            audio.stories.forEach(s => {
                sList.innerHTML += `
                    <div class="audio-card" data-url="${s.url}" onclick="App.playAudio('${s.url}', '${s.name}', '📖')">
                        <div class="audio-card-main">
                            <span class="play-icon">📖</span>
                            <div class="audio-info">
                                <div class="audio-name">${s.name}</div>
                                <div class="audio-desc">${s.desc}</div>
                            </div>
                            <span class="btn-play-mini">🎧</span>
                        </div>
                        <div class="card-controls-inner">
                            <span style="font-size:12px">🔈</span>
                            <input type="range" class="card-vol-slider" min="0" max="1" step="0.05" value="0.35" 
                                   onclick="event.stopPropagation()" 
                                   oninput="App.changeVolume(this.value)">
                            <button class="btn-stop-mini" onclick="event.stopPropagation(); App.stopAudio()">Dừng</button>
                        </div>
                        <div class="playing-wave"></div>
                    </div>`;
            });
        }
    },

    // --- PARENT DASHBOARD ---
    renderParentDashboard(filter = 'month') {
        const students = ['thao', 'hailinh', 'diep'];
        let totalAllStars = 0;
        let totalScore = 0;
        let totalEx = 0;

        const chartContainer = document.getElementById('allStudentsChart');
        const monthlyLb = document.getElementById('monthlyLeaderboard');
        if (!chartContainer) return;
        chartContainer.innerHTML = '';

        const now = new Date();
        const currMonth = now.getMonth() + 1;
        const currYear = now.getFullYear();

        const studentMonthlyData = [];

        students.forEach(k => {
            const sd = State.getStudentData(k);
            const info = (k === 'thao') ? window.APP_DATA.THAO : (k === 'hailinh' ? window.APP_DATA.HAILINH : window.APP_DATA.DIEP);
            totalAllStars += (sd.stars || 0);

            // Calc period stars & score
            const periodStars = State.getPeriodStars(k, filter);
            let periodCorrect = 0;
            let periodTotal = 0;

            // Stats from bonusScores (for percentage chart)
            if (sd.bonusScores) {
                Object.entries(sd.bonusScores).forEach(([dateStr, s]) => {
                    const { year, month } = Utils.parseDate(dateStr);
                    let match = false;
                    if (filter === 'month' && month === currMonth && year === currYear) match = true;
                    if (filter === 'quarter') {
                        const currQ = Math.floor((currMonth - 1) / 3);
                        const q = Math.floor((month - 1) / 3);
                        if (q === currQ && year === currYear) match = true;
                    }
                    if (filter === 'year' && year === currYear) match = true;

                    if (match) {
                        periodCorrect += s.score;
                        periodTotal += s.total;
                    }
                });
            }

            studentMonthlyData.push({ key: k, name: info.name, emoji: info.emoji, stars: periodStars, color: info.color, grade: info.grade });

            const pct = periodTotal > 0 ? Math.round((periodCorrect / periodTotal) * 100) : 0;
            totalScore += periodCorrect;
            totalEx += periodTotal;

            chartContainer.innerHTML += `
                <div class="all-chart-item">
                    <div class="chart-name">${info.emoji} ${info.name} (Lớp ${info.grade})</div>
                    <div class="chart-bar-bg">
                        <div class="chart-bar-fill" style="width: ${pct}%; background: ${info.color}">
                            <div class="chart-bar-text">${pct}% Đúng</div>
                        </div>
                    </div>
                    <div style="font-size:12px; margin-top:4px">
                        ✨ Giai đoạn này: <strong>${periodStars}</strong> sao | ⭐ Tổng: <strong>${sd.stars}</strong> sao
                    </div>
                </div>`;
        });

        // Render Monthly Leaderboard
        if (monthlyLb) {
            monthlyLb.innerHTML = '';
            studentMonthlyData.sort((a, b) => b.stars - a.stars);
            studentMonthlyData.forEach((s, idx) => {
                const rankClass = idx === 0 ? 'rank-1' : (idx === 1 ? 'rank-2' : '');
                const medal = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : '🥉');

                monthlyLb.innerHTML += `
                    <div class="lb-item ${rankClass}">
                        <div class="lb-rank">${medal}</div>
                        <div class="lb-avatar">${s.emoji}</div>
                        <div class="lb-info">
                            <div class="lb-name">${s.name}</div>
                            <div class="lb-grade">Hạng ${idx + 1} - Lớp ${s.grade}</div>
                        </div>
                        <div class="lb-stars">+${s.stars} ⭐</div>
                    </div>`;
            });
        }

        document.getElementById('p_totalStars').textContent = totalAllStars;
        document.getElementById('p_avgScore').textContent = (totalEx > 0 ? Math.round((totalScore / totalEx) * 100) : 0) + '%';

        // Parent rewards
        const rList = document.getElementById('parentRewardsList');
        if (!rList) return;
        rList.innerHTML = '';
        window.APP_DATA.PARENT_REWARDS.forEach(r => {
            const isMilestoneReached = students.some(k => State.getStudentData(k).stars >= r.targetStars);

            rList.innerHTML += `
                <div class="p-reward-item ${isMilestoneReached ? 'unlocked' : ''}">
                    <span style="font-size:24px">${r.emoji}</span>
                    <div class="p-reward-text">${r.name}</div>
                    <div class="p-reward-target">${r.targetStars} ⭐</div>
                    ${isMilestoneReached ? '<span style="color:var(--green);font-weight:900;margin-left:auto">ĐẠT!</span>' : ''}
                </div>`;
        });
    }
};

// ============================================================
// APP CONTROLLER
// ============================================================
const App = {
    init() {
        State.load();
        UI.renderHome();
        this.setupEventListeners();

        // Register Service Worker for PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
        }
    },

    setupEventListeners() {
        // Home card clicks
        document.getElementById('cardThao')?.addEventListener('click', () => this.enterStudent('thao'));
        document.getElementById('cardHaiLinh')?.addEventListener('click', () => this.enterStudent('hailinh'));
        document.getElementById('cardDiep')?.addEventListener('click', () => this.enterStudent('diep'));

        // Back button
        document.getElementById('btnBack')?.addEventListener('click', () => this.goHome());

        // Tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Calendar navigation
        document.getElementById('btnPrevMonth')?.addEventListener('click', () => {
            State.calendarMonth--;
            if (State.calendarMonth < 1) { State.calendarMonth = 12; State.calendarYear--; }
            UI.renderCalendar();
        });
        document.getElementById('btnNextMonth')?.addEventListener('click', () => {
            State.calendarMonth++;
            if (State.calendarMonth > 12) { State.calendarMonth = 1; State.calendarYear++; }
            UI.renderCalendar();
        });

        // Check-in button
        document.getElementById('btnCheckin')?.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            if (btn.disabled) return;
            const dateStr = btn.dataset.date;
            this.doCheckin(dateStr);
        });

        // Praise close
        document.getElementById('btnPraiseClose')?.addEventListener('click', () => {
            document.getElementById('praiseOverlay').classList.add('hidden');
            document.getElementById('confettiContainer').innerHTML = '';
        });

        // Close praise on overlay click
        document.getElementById('praiseOverlay')?.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                document.getElementById('praiseOverlay').classList.add('hidden');
                document.getElementById('confettiContainer').innerHTML = '';
            }
        });
    },

    enterStudent(studentKey, initialTab = 'today') {
        State.currentStudent = studentKey;
        const t = Utils.today();
        State.calendarYear = t.year;
        State.calendarMonth = t.month;
        State.selectedDate = Utils.toDateStr(t.year, t.month, t.day);

        document.getElementById('homeScreen').classList.remove('active');
        document.getElementById('studentScreen').classList.add('active');
        UI.renderStudentScreen(studentKey);

        // Chuyển đến tab đã chọn (mặc định là today)
        this.switchTab(initialTab);
    },

    goHome() {
        State.currentStudent = null;
        document.getElementById('studentScreen').classList.remove('active');
        document.getElementById('homeScreen').classList.add('active');
        UI.renderHome();
    },

    enterParentFromHome() {
        console.log("⚓ Đang mở Bảng Điều Khiển của Bác...");
        // Vào đại diện qua bé Thảo để tới tab Quản lý
        App.enterStudent('thao', 'parent');

        // Tự động mở khóa luôn cho Bác Tân khi vào từ Home
        setTimeout(() => {
            document.getElementById('parentPin').value = '1234';
            App.unlockParent();
        }, 100);
    },

    switchTab(tabName) {
        State.currentTab = tabName;

        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Show correct content
        document.querySelectorAll('.tab-content').forEach(tc => {
            tc.classList.toggle('active', tc.id === `tab_${tabName}`);
        });

        // Render content
        if (tabName === 'today') {
            if (State.selectedDate) {
                const { year, month, day } = Utils.parseDate(State.selectedDate);
                UI.renderToday(year, month, day);
            } else {
                const t = Utils.today();
                UI.renderToday(t.year, t.month, t.day);
            }
        } else if (tabName === 'calendar') {
            UI.renderCalendar();
        } else if (tabName === 'rewards') {
            UI.renderRewards();
            UI.renderLeaderboard();
        } else if (tabName === 'shop') {
            UI.renderShop();
        } else if (tabName === 'relax') {
            UI.renderRelax();
        } else if (tabName === 'challenge') {
            Game.init(State.currentStudent);
        } else if (tabName === 'parent') {
            // Parent lock handled by UI reset
        }
    },

    unlockParent() {
        const pin = document.getElementById('parentPin').value;
        if (pin === '1234') {
            document.getElementById('parentLock').style.display = 'none';
            document.getElementById('parentDashboard').style.display = 'block';
            UI.renderParentDashboard();
        } else {
            alert('❌ Mật mã chưa đúng Bác Tân ơi!');
        }
    },

    filterStats(period) {
        // Update tabs buttons UI
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('onclick').includes(period));
        });
        UI.renderParentDashboard(period);
    },

    parentGiftStars() {
        const student = document.getElementById('giftTarget').value;
        const amount = parseInt(document.getElementById('giftAmount').value);
        const reason = document.getElementById('giftReason').value.trim();

        if (isNaN(amount) || amount <= 0) {
            alert('⚠️ Bác hãy nhập số sao muốn tặng nhé!');
            return;
        }

        const studentName = (student === 'thao') ? 'Phương Thảo' : (student === 'hailinh' ? 'Hải Linh' : 'Ngọc Diệp');
        const confirmMsg = `Bác muốn tặng ${amount} sao cho bé ${studentName} vì lý do: "${reason || 'Chăm ngoan'}"?`;

        if (confirm(confirmMsg)) {
            const newTotal = State.addStar(student, amount);
            if (State.currentStudent === student) UI.updateTopbarStars();
            this.launchConfetti();
            this.showMiniPraise(`🎁 Đã tặng ${amount} sao cho ${studentName}! 🎉`);
            document.getElementById('giftAmount').value = '';
            document.getElementById('giftReason').value = '';
            UI.renderParentDashboard();
        }
    },

    sendSecretMsg() {
        const target = document.getElementById('giftTarget').value;
        const msg = document.getElementById('parentMsgContent').value.trim();
        if (!msg) return alert('Bác hãy nhập nội dung tin nhắn nhé!');
        State.sendMessage(target, msg);
        alert('🚀 Đã gửi lời nhắn bí mật tới bé!');
        document.getElementById('parentMsgContent').value = '';
    },

    handleImport(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => State.importData(e.target.result);
        reader.readAsText(file);
    },

    buyItem(itemId) {
        const item = window.APP_DATA.SHOP_ITEMS.find(i => i.id === itemId);
        if (!item) return;

        if (State.buyItem(State.currentStudent, item)) {
            UI.updateTopbarStars();
            UI.renderShop();
            this.launchConfetti();
            this.showMiniPraise(`🛍️ Đã mua ${item.name}! Chúc mừng em!`);
        } else {
            alert('❌ Em không đủ sao rồi. Cố gắng học thêm nhé!');
        }
    },

    playAudio(url, name, icon) {
        if (url === '#') {
            alert('🎬 Tính năng truyện kể đang được cập nhật thêm nội dung nhé!');
            return;
        }
        const container = document.getElementById('audioPlayerContainer');
        const player = document.getElementById('mainAudioPlayer');
        const iconEl = document.getElementById('nowPlayingIcon');
        const nameEl = document.getElementById('nowPlayingName');

        // Remove active class from all cards
        document.querySelectorAll('.audio-card').forEach(card => card.classList.remove('active'));
        // Add active class to clicked card
        const activeCard = document.querySelector(`.audio-card[data-url="${url}"]`);
        if (activeCard) activeCard.classList.add('active');

        iconEl.textContent = icon;
        nameEl.textContent = name;
        player.src = url;
        player.volume = 0.35; // Âm lượng vừa đủ (35%)
        container.style.display = 'none'; // Ẩn trình phát dưới cùng để dùng trình phát tại thẻ

        // Sync card slider UI if exists
        if (activeCard) {
            const cardSlider = activeCard.querySelector('.card-vol-slider');
            if (cardSlider) cardSlider.value = 0.35;
        }

        player.play();
    },

    changeVolume(val) {
        const player = document.getElementById('mainAudioPlayer');
        if (player) {
            player.volume = val;
        }
        // Sync secondary slider if using fixed player
        const mainSlider = document.getElementById('volumeSlider');
        if (mainSlider) mainSlider.value = val;
    },

    stopAudio() {
        const player = document.getElementById('mainAudioPlayer');
        player.pause();
        player.src = '';
        document.querySelectorAll('.audio-card').forEach(card => card.classList.remove('active'));
    },

    startVoice(inputId, dateStr, idx) {
        const input = document.getElementById(inputId);
        const btn = event.currentTarget;

        if (!('webkitSpeechRecognition' in window)) {
            alert("❌ Trình duyệt của em không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome nhé!");
            return;
        }

        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'vi-VN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            btn.classList.add('listening');
            this.showMiniPraise("🎙️ Đang nghe em nói...");
        };

        recognition.onerror = (event) => {
            console.error(event.error);
            btn.classList.remove('listening');
            alert("⚠️ Có lỗi khi nghe giọng nói, em thử lại nhé!");
        };

        recognition.onend = () => {
            btn.classList.remove('listening');
        };

        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            input.value = speechToText;
            this.saveBonusAnswer(dateStr, idx, speechToText);
            this.showMiniPraise("✨ Đã nhận được câu trả lời!");
            // Tự động kiểm tra nếu muốn
            // this.checkBonus(idx, ..., dateStr, ...);
        };

        recognition.start();
    },

    selectDay(dateStr) {
        State.selectedDate = dateStr;
        this.switchTab('today');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    doCheckin(dateStr) {
        const studentKey = State.currentStudent;
        const already = State.isCheckedIn(studentKey, dateStr);
        if (already) {
            this.showMiniPraise("🌟 Hôm nay em đã tích sao rồi nhé!");
            return;
        }

        State.setCheckin(studentKey, dateStr, true);
        const newStars = State.addStar(studentKey, 1);
        UI.updateTopbarStars();
        this.showPraise(newStars);

        const btn = document.getElementById('btnCheckin');
        if (btn) {
            btn.innerHTML = '✅ Em đã học xong hôm nay! +⭐';
            btn.classList.add('done');
        }
    },

    showPraise(totalStars) {
        const praise = Utils.randomPick(window.APP_DATA.PRAISES);
        const praiseEmojis = ['🌟', '⭐', '🎉', '🏆', '🎀', '🦋', '🌈', '💖', '🎊', '✨'];
        const emoji = Utils.randomPick(praiseEmojis);

        document.getElementById('praiseEmoji').textContent = emoji;
        document.getElementById('praiseText').textContent = praise;
        document.getElementById('praiseStarsTotal').textContent = `Tổng: ${totalStars} ⭐`;

        const rewards = window.APP_DATA.REWARDS;
        const justUnlocked = rewards.find(r => r.stars === totalStars);
        if (justUnlocked) {
            document.getElementById('praiseTitle').textContent = `🎁 Mở khóa: ${justUnlocked.name}!`;
        } else {
            document.getElementById('praiseTitle').textContent = '🌟 Giỏi lắm!';
        }

        document.getElementById('praiseOverlay').classList.remove('hidden');
        this.launchConfetti();
    },

    toggleHw(dateStr, idx, checkEl) {
        const studentKey = State.currentStudent;
        const done = !checkEl.classList.contains('done');
        State.setHwDone(studentKey, dateStr, idx, done);

        checkEl.classList.toggle('done', done);
        checkEl.innerHTML = done ? '✓' : '';

        const textEl = document.getElementById(`hwt_${dateStr}_${idx}`);
        if (textEl) textEl.classList.toggle('done', done);

        if (done) {
            const hwItems = document.querySelectorAll('.hw-check');
            const allDone = Array.from(hwItems).every(el => el.classList.contains('done'));
            if (allDone && hwItems.length > 0) {
                setTimeout(() => {
                    const newStars = State.addStar(studentKey, 2);
                    UI.updateTopbarStars();
                    this.showMiniPraise('🎉 Tuyệt vời! Hoàn thành hết bài về nhà: +2 ⭐');
                }, 300);
            }
        }
    },

    saveBonusAnswer(dateStr, idx, val) {
        State.saveBonusAnswer(State.currentStudent, dateStr, idx, val);
    },

    isCorrectAnswer(userAns, correctAns, subject) {
        if (!userAns) return false;
        if (subject === 'toan') {
            const userNums = userAns.match(/\d+/g);
            const correctNums = correctAns.match(/\d+/g);
            if (userNums && correctNums && userNums.join('') === correctNums.join('')) return true;
        }
        const possible = correctAns.split(/[;,/]/).map(s => s.trim());
        return possible.some(ans => Utils.isNearMatch(userAns, ans));
    },

    checkBonus(idx, correctAns, dateStr, subject) {
        const input = document.getElementById(`input_bonus_${idx}`);
        const resultEl = document.getElementById(`res_bonus_${idx}`);
        const showBtn = document.getElementById(`btn_show_ans_${idx}`);
        if (!input || !resultEl) return;

        const userAns = input.value.trim();
        if (!userAns) {
            resultEl.className = 'bonus-result visible incorrect';
            resultEl.innerHTML = '⚠️ Em hãy nhập câu trả lời trước nhé!';
            return;
        }

        if (showBtn) showBtn.style.display = 'inline-block';
        const isCorrect = this.isCorrectAnswer(userAns, correctAns, subject);

        resultEl.className = 'bonus-result visible ' + (isCorrect ? 'correct' : 'incorrect');
        resultEl.innerHTML = isCorrect ? '🎉 Chính xác! Giỏi quá!' : '❌ Chưa đúng rồi, thử lại nhé!';

        const studentKey = State.currentStudent;
        const { year, month, day } = Utils.parseDate(dateStr);
        const dailyExercises = ContentGen.getBonusExercises(studentKey, year, month, day);

        let correctCount = 0;
        dailyExercises.forEach((ex, i) => {
            const uAns = State.getBonusAnswer(studentKey, dateStr, i);
            if (this.isCorrectAnswer(uAns, ex.answer, ex.subject)) correctCount++;
        });

        State.saveBonusScore(studentKey, dateStr, correctCount, dailyExercises.length);
        if (isCorrect) {
            State.addStar(studentKey, 1);
            UI.updateTopbarStars();
            this.showMiniPraise('✨ Chính xác! Tặng em +1 ⭐');
        }
    },

    showMiniPraise(msg) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: var(--green); color: white; padding: 14px 24px;
            border-radius: 100px; font-weight: 800; font-size: 15px;
            box-shadow: 0 8px 32px rgba(0,200,83,0.4); z-index: 1100;
            animation: slideUp 0.3s ease;
        `;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },

    launchConfetti() {
        const container = document.getElementById('confettiContainer');
        if (!container) return;
        container.innerHTML = '';
        const colors = ['#FF6B9D', '#7C4DFF', '#FFD600', '#00C853', '#2979FF', '#FF6D00'];
        for (let i = 0; i < 60; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.cssText = `
                left: ${Math.random() * 100}vw;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                width: ${6 + Math.random() * 8}px;
                height: ${6 + Math.random() * 8}px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                animation-duration: ${2 + Math.random() * 2}s;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            container.appendChild(piece);
        }
        setTimeout(() => container.innerHTML = '', 4000);
    },
};

// ============================================================
// INIT
// ============================================================
// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
            console.log('SW registered!', reg);
        }).catch(err => {
            console.log('SW registration failed', err);
        });
    });
}

// ============================================================
// GAME LOGIC - ĐẠI CHIẾN SẤM SÉT
// ============================================================
const Game = {
    timer: null,
    timeLeft: 60,
    score: 0,
    currentAnswer: null,
    studentKey: '',

    init(who) {
        this.studentKey = who;
        this.resetUI();
        const sd = State.getStudentData(who);
        document.getElementById('gameBestScore').textContent = sd.bestGameScore || 0;
    },

    resetUI() {
        document.getElementById('gameStartArea').classList.remove('hidden');
        document.getElementById('gamePlayArea').classList.add('hidden');
        document.getElementById('gameResultArea').classList.add('hidden');
        clearInterval(this.timer);
    },

    start() {
        this.timeLeft = 60;
        this.score = 0;
        document.getElementById('gameScore').textContent = '0';
        document.getElementById('gameTimer').textContent = '60';
        document.getElementById('gameStartArea').classList.add('hidden');
        document.getElementById('gamePlayArea').classList.remove('hidden');
        document.getElementById('gameInput').value = '';
        document.getElementById('gameInput').focus();

        this.nextProblem();
        this.timer = setInterval(() => {
            this.timeLeft--;
            document.getElementById('gameTimer').textContent = this.timeLeft;
            if (this.timeLeft <= 0) this.end();
        }, 1000);
    },

    nextProblem() {
        const grade = window.APP_DATA[this.studentKey.toUpperCase()].grade;
        let a, b, op = '+';

        if (grade === 2) {
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 20) + 1;
        } else if (grade === 3) {
            a = Math.floor(Math.random() * 50) + 10;
            b = Math.floor(Math.random() * 50) + 10;
            if (Math.random() > 0.5) op = '-';
        } else {
            a = Math.floor(Math.random() * 90) + 10;
            b = Math.floor(Math.random() * 90) + 10;
            const r = Math.random();
            if (r > 0.6) op = 'x';
            else if (r > 0.3) op = '-';
            if (op === 'x') { a = Math.floor(Math.random() * 12); b = Math.floor(Math.random() * 12); }
        }

        if (op === '-' && a < b) [a, b] = [b, a];

        this.currentAnswer = op === '+' ? a + b : (op === '-' ? a - b : a * b);
        document.getElementById('gameProblem').textContent = `${a} ${op === 'x' ? '×' : (op === '+' ? '+' : '-')} ${b} = ?`;
        document.getElementById('gameInput').value = '';
    },

    check() {
        const val = parseInt(document.getElementById('gameInput').value);
        if (val === this.currentAnswer) {
            this.score++;
            document.getElementById('gameScore').textContent = this.score;
            document.getElementById('gameInput').style.borderColor = 'var(--green)';
            setTimeout(() => {
                document.getElementById('gameInput').style.borderColor = 'var(--theme-main)';
                this.nextProblem();
                document.getElementById('gameInput').focus();
            }, 200);
        } else {
            document.getElementById('gameInput').classList.add('shake');
            setTimeout(() => document.getElementById('gameInput').classList.remove('shake'), 500);
        }
    },

    end() {
        clearInterval(this.timer);
        document.getElementById('gamePlayArea').classList.add('hidden');
        document.getElementById('gameResultArea').classList.remove('hidden');
        document.getElementById('resultScore').textContent = this.score;

        const stars = Math.floor(this.score / 5);
        document.getElementById('resultStars').textContent = stars;

        if (stars > 0) {
            State.addStar(this.studentKey, stars);
            App.launchConfetti();
        }

        const sd = State.getStudentData(this.studentKey);
        if (this.score > (sd.bestGameScore || 0)) {
            sd.bestGameScore = this.score;
            State.save();
            document.getElementById('resultTitle').textContent = '🌟 KỶ LỤC MỚI! 🌟';
        } else {
            document.getElementById('resultTitle').textContent = 'Hết giờ rồi!';
        }
    },

    reset() {
        this.init(this.studentKey);
    }
};

// Export to window to ensure global access
window.State = State;
window.Utils = Utils;
window.ContentGen = ContentGen;
window.UI = UI;
window.App = App;
window.Game = Game;

document.addEventListener('DOMContentLoaded', () => {
    App.init();

    // Listen for Enter key in game input
    document.getElementById('gameInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') Game.check();
    });
});
