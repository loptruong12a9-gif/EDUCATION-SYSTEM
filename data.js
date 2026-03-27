// ============================================================
// DATA.JS - Dữ liệu học tập SIÊU CHI TIẾT 2025-2026
// HỌC VUI CÙNG BÉ - Nâng cấp bởi Bác Tân
// ============================================================

const APP_VERSION = "3.0";

// ============================================================
// CẤU HÌNH CHUNG
// ============================================================
const CONFIG = {
    schoolYearStart: "2025-09-05",
    schoolYearEnd: "2026-05-31",
    semester1End: "2026-01-17",
    semester2Start: "2026-01-19",
    tetBreakStart: "2026-01-26",
    tetBreakEnd: "2026-02-01",
    maxStarsMonth: 50,
    starsForReward: 100,
};

const HOLIDAYS = [
    { date: "2025-09-02", name: "Quốc Khánh 2/9" },
    { date: "2025-11-20", name: "Ngày Nhà Giáo Việt Nam 20/11" },
    { date: "2025-12-25", name: "Giáng Sinh" },
    { date: "2026-01-01", name: "Tết Dương Lịch" },
    { date: "2026-01-26", name: "Tết Nguyên Đán" },
    { date: "2026-01-27", name: "Tết Nguyên Đán" },
    { date: "2026-01-28", name: "Tết Nguyên Đán" },
    { date: "2026-01-29", name: "Tết Nguyên Đán" },
    { date: "2026-01-30", name: "Tết Nguyên Đán" },
    { date: "2026-01-31", name: "Tết Nguyên Đán" },
    { date: "2026-02-01", name: "Tết Nguyên Đán" },
    { date: "2026-04-30", name: "Ngày Giải Phóng 30/4" },
    { date: "2026-05-01", name: "Ngày Quốc Tế Lao Động 1/5" },
];

// ============================================================
// DỮ LIỆU BÉ THẢO - LỚP 2 (KẾT NỐI TRI THỨC)
// ============================================================
const THAO_DATA = {
    name: "Nguyễn Hoàng Phương Thảo",
    shortName: "Thảo",
    grade: 2,
    emoji: "🌸",
    color: "#FF6B9D",
    colorLight: "#FFE0ED",
    mascot: "🐱",
    mascotName: "Lily",
    themeName: "Xứ sở Hồng Hoa",

    themes: {
        "2025-09": "🌟 Em là học sinh lớp 2",
        "2025-10": "🍂 Bạn bè và ngôi trường",
        "2025-11": "📖 Thầy cô và gia đình",
        "2025-12": "🎄 Niềm vui quanh em",
        "2026-01": "🎆 Ôn thi & Đón Tết",
        "2026-02": "🌺 Quê hương em",
        "2026-03": "🌿 Thế giới động - thực vật",
        "2026-04": "☀️ Em bảo vệ môi trường",
        "2026-05": "🏆 Tổng kết năm học",
    },

    schedule: {
        1: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Giáo dục thể chất", duration: "1 tiết" }, { subject: "Hoạt động trải nghiệm", duration: "1 tiết" }],
        2: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Tự nhiên & Xã hội", duration: "1 tiết" }, { subject: "Tiếng Anh", duration: "1 tiết" }],
        3: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Nghệ thuật (Mỹ thuật)", duration: "1 tiết" }, { subject: "Đạo Đức", duration: "1 tiết" }],
        4: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Nghệ thuật (Âm nhạc)", duration: "1 tiết" }, { subject: "Tiếng Anh", duration: "1 tiết" }],
        5: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Tự nhiên & Xã hội", duration: "1 tiết" }, { subject: "Hoạt động trải nghiệm", duration: "1 tiết" }, { subject: "Giáo dục thể chất", duration: "1 tiết" }],
    },

    weeklyContent: {
        1: { week: "Tuần 1", tviet: "B1: Tôi là học sinh lớp 2 (Đọc). B2: Ngày hôm qua đâu rồi? (Chính tả)", toan: "Ôn tập các số đến 100. Tia số, số liền trước, số liền sau.", tnxh: "B1: Các thành viên trong gia đình.", daoduc: "Quý trọng thời gian (T1)", english: "Unit 1: Hello again - Lesson 1" },
        2: { week: "Tuần 2", tviet: "B3: Niềm vui của Bi và Bống. Luyện từ: Từ ngữ về đồ dùng học tập.", toan: "Phép cộng, phép trừ không nhớ trong phạm vi 100.", tnxh: "B2: Nghề nghiệp của người thân.", daoduc: "Quý trọng thời gian (T2)", english: "Unit 1: Hello again - Lesson 2" },
        3: { week: "Tuần 3", tviet: "B4: Làm việc thật là vui. Viết: Kể về việc em thường làm.", toan: "Số hạng - Tổng. Số bị trừ - Số trừ - Hiệu. Hơn, kém nhau bao nhiêu.", tnxh: "B3: Phòng tránh ngộ độc khi ở nhà.", daoduc: "Nhận lỗi và sửa lỗi (T1)", english: "Unit 2: My things - Lesson 1" },
        4: { week: "Tuần 4", tviet: "B5: Em có xinh không? Nói và nghe: Kể chuyện.", toan: "Đề-xi-mét (dm). Luyện tập chung.", tnxh: "B4: Giữ vệ sinh nhà ở.", daoduc: "Nhận lỗi và sửa lỗi (T2)", english: "Unit 2: My things - Lesson 2" },
        5: { week: "Tuần 5", tviet: "B6: Một giờ học. Luyện từ: Từ ngữ chỉ người, vật, hoạt động.", toan: "Phép cộng (qua 10) trong phạm vi 20 (Dạng 9+5, 8+5).", tnxh: "B5: Ôn tập chủ đề gia đình.", daoduc: "Bảo quản đồ dùng gia đình", english: "Unit 3: My clothes - Lesson 1" },
        6: { week: "Tuần 6", tviet: "B7: Cây xấu hổ. Viết: Đoạn văn kể về hoạt động ở trường.", toan: "Phép trừ (qua 10) trong phạm vi 20 (Dạng 11-5, 12-5).", tnxh: "B6: Chào đón ngày khai giảng.", daoduc: "Bảo quản đồ dùng gia đình (T2)" },
        7: { week: "Tuần 7", tviet: "B8: Cầu học. Luyện từ: Từ ngữ chỉ hoạt động, tình cảm.", toan: "Bài toán về thêm, bớt một số đơn vị.", tnxh: "B7: Các thành viên nhà trường.", daoduc: "Bảo quản đồ dùng học tập" },
        8: { week: "Tuần 8", tviet: "B9: Mẫu giấy vụn. Viết: Kể về buổi khai trường.", toan: "Luyện tập chung: Phép cộng, trừ có nhớ qua 10.", tnxh: "B8: An toàn khi tham gia hoạt động trường.", daoduc: "Ôn tập" },
        9: { week: "Tuần 9", tviet: "Ôn tập và đánh giá giữa HK1.", toan: "Kiểm tra giữa HK1. Hình học: Đường thẳng, đường cong.", tnxh: "B9: Giữ vệ sinh trường học.", daoduc: "Đánh giá giữa HK1" },
        10: { week: "Tuần 10", tviet: "B10: Thời khóa biểu. Luyện câu: Câu giới thiệu.", toan: "Phép cộng có nhớ trong phạm vi 100 (Dạng 26+4, 26+24).", tnxh: "B10: Ôn tập chủ đề trường học.", daoduc: "Kính trọng thầy cô giáo" },
        11: { week: "Tuần 11", tviet: "B11: Chuyện của thước kẻ. Viết: Kể tên các môn học.", toan: "Phép cộng có nhớ (Dạng 36+15, 66+25).", tnxh: "B11: Xung quanh nhà em.", daoduc: "Kính trọng thầy cô (T2)" },
        12: { week: "Tuần 12", tviet: "B12: Danh sách học sinh. Nói và nghe: Cảm ơn, xin lỗi.", toan: "Phép trừ có nhớ trong phạm vi 100 (Dạng 50-15, 30-8).", tnxh: "B12: Mua bán hàng hóa.", daoduc: "Yêu quý bạn bè" },
        13: { week: "Tuần 13", tviet: "B13: Yêu lắm trường ơi! Viết: Đoạn văn tả đồ dùng học tập.", toan: "Phép trừ có nhớ (Dạng 52-24, 61-25).", tnxh: "B13: An toàn khi đi đường.", daoduc: "Giúp đỡ bạn bè" },
        14: { week: "Tuần 14", tviet: "B14: Em học vẽ. Luyện từ: Từ chỉ đặc điểm.", toan: "Luyện tập chung: Phép trừ có nhớ.", tnxh: "B14: Thực vật quanh em.", daoduc: "Quan tâm hàng xóm" },
        15: { week: "Tuần 15", tviet: "B15: Gọi bạn. Viết: Kể về một người bạn.", toan: "Đường gấp khúc. Độ dài đường gấp khúc.", tnxh: "B15: Động vật quanh em.", daoduc: "Biết ơn người lao động" },
        16: { week: "Tuần 16", tviet: "B16: Tớ nhớ cậu. Luyện câu: Câu nêu đặc điểm.", toan: "Kilôgam (kg). Lít (l). Luyện tập về đo lường.", tnxh: "B16: Bảo vệ môi trường sống của thực vật.", daoduc: "Kiềm chế cơn giận" },
        17: { week: "Tuần 17", tviet: "Ôn tập cuối HK1 (Đọc, viết, nghe).", toan: "Ôn tập về đại lượng, hình học. Kiểm tra cuối năm.", tnxh: "Ôn tập chủ đề thực vật, động vật.", daoduc: "Ôn tập cuối kỳ" },
        18: { week: "Tuần 18", tviet: "Kiểm tra học kỳ 1.", toan: "Kiểm tra học kỳ 1.", tnxh: "Trải nghiệm văn hóa Tết.", daoduc: "Đánh giá HK1" },
        19: { week: "Tuần 19", tviet: "B17: Chuyện bốn mùa. Luyện từ: Từ chỉ các mùa.", toan: "Các số có ba chữ số. Cấu tạo số.", tnxh: "B17: Cơ quan vận động.", daoduc: "Nói lời yêu thương" },
        20: { week: "Tuần 20", tviet: "B18: Mùa nước nổi. Viết: Kể về một mùa.", toan: "So sánh các số có ba chữ số. Thứ tự số.", tnxh: "B18: Chăm sóc cơ quan vận động.", daoduc: "Tự giác học tập" },
        21: { week: "Tuần 21", tviet: "B19: Tết đến rồi. Nói và nghe: Chúc Tết.", toan: "Mét (m). Ki-lô-mét (km). Phép cộng không nhớ (Phạm vi 1000).", tnxh: "B19: Cơ quan hô hấp.", daoduc: "Tự giác việc nhà" },
        22: { week: "Tuần 22", tviet: "B20: Giọt nước rơi. Luyện từ: Từ chỉ sự vật, thời gian.", toan: "Phép trừ không nhớ trong phạm vi 1000.", tnxh: "B20: Bảo vệ cơ quan hô hấp.", daoduc: "Ngăn nắp gọn gàng" },
        23: { week: "Tuần 23", tviet: "B21: Mai An Tiêm. Viết: Kể chuyện vượt khó.", toan: "Phép nhân. Thừa số - Tích. Bảng nhân 2.", tnxh: "B21: Cơ quan bài tiết nước tiểu.", daoduc: "Tiết kiệm tiền bạc" },
        24: { week: "Tuần 24", tviet: "B22: Thư viện biết đi. Luyện câu: Câu nêu hoạt động.", toan: "Bảng nhân 5. Phép chia. Số bị chia - Số chia - Thương.", tnxh: "B22: Ôn tập chủ đề Con người.", daoduc: "Bảo vệ của công" },
        25: { week: "Tuần 25", tviet: "B23: Con rồng cháu tiên. Viết: Tả một thắng cảnh.", toan: "Bảng chia 2. Bảng chia 5. Luyện tập phép tính.", tnxh: "B23: Bầu trời ban ngày và đêm.", daoduc: "Tôn trọng tài sản trường" },
        26: { week: "Tuần 26", tviet: "B24: Nam Cực. Luyện từ: Từ chỉ phương hướng.", toan: "Giờ - phút. Xem đồng hồ. Ngày - tháng.", tnxh: "B24: Các mùa trong năm.", daoduc: "Bảo vệ môi trường" },
        27: { week: "Tuần 27", tviet: "Ôn tập giữa HK2.", toan: "Kiểm tra giữa HK2. Hình khối trụ, hình khối cầu.", tnxh: "B25: Một số hiện tượng thiên tai.", daoduc: "Tiết kiệm điện nước" },
        28: { week: "Tuần 28", tviet: "B25: Khám phá đáy biển. Viết: Tả con vật dưới nước.", toan: "Phép cộng có nhớ trong phạm vi 1000 (Dạng 256+125).", tnxh: "B26: Phòng tránh thiên tai.", daoduc: "Chấp hành luật giao thông" },
        29: { week: "Tuần 29", tviet: "B26: Khám phá rừng xanh. Luyện câu: Câu hỏi Vì sao?", toan: "Phép trừ có nhớ phạm vi 1000 (Dạng 432 - 125).", tnxh: "Ôn tập chủ đề Trái đất.", daoduc: "An toàn giao thông" },
        30: { week: "Tuần 30", tviet: "B27: Con đường đến trường. Viết: Tả cảnh đẹp quê hương.", toan: "Tiền Việt Nam. Thu thập, phân loại, kiểm đếm.", tnxh: "B27: Rừng và biển Việt Nam.", daoduc: "Kiên trì vượt khó" },
        31: { week: "Tuần 31", tviet: "B28: Đất nước tươi đẹp. Nói và nghe: Kể về danh lam thắng cảnh.", toan: "Biểu đồ tranh. Khả năng xảy ra của một sự việc.", tnxh: "B28: Bản đồ đất nước em.", daoduc: "Lòng tự hào dân tộc" },
        32: { week: "Tuần 32", tviet: "B29: Việt Nam thân yêu. Luyện từ: Từ chỉ màu sắc.", toan: "Ôn tập phép cộng, phép trừ phạm vi 100, 1000.", tnxh: "B29: Lễ hội quê em.", daoduc: "Em yêu Tổ quốc" },
        33: { week: "Tuần 33", tviet: "Ôn tập cuối năm 1: Tiếng Việt kỳ 1.", toan: "Ôn tập hình học và đo lường cuối năm.", tnxh: "Ôn tập tổng hợp chủ đề xã hội.", daoduc: "Phòng tránh tai nạn" },
        34: { week: "Tuần 34", tviet: "Ôn tập cuối năm 2: Tiếng Việt kỳ 2.", toan: "Ôn tập tổng kết: Giải bài toán có lời văn.", tnxh: "Ôn tập thế giới tự nhiên.", daoduc: "Tự đánh giá" },
        35: { week: "Tuần 35", tviet: "Kiểm tra cuối năm.", toan: "Kiểm tra cuối năm.", tnxh: "Tổng kết năm học.", daoduc: "Chào hè" },
    },

    bonusExercises: {
        "tiengviet": [
            { question: "Em hãy đặt 2 câu giới thiệu về bản thân cho bạn mới.", hint: "Dùng từ: là, tên là, học lớp...", answer: "Ví dụ: Tớ là Phương Thảo. Tớ học lớp 2A trường tiểu học..." },
            { question: "Tìm 3 từ chỉ hoạt động của học sinh trong giờ ra chơi.", hint: "Nhảy dây, đá cầu...", answer: "Đá cầu, nhảy dây, đuổi bắt, đọc truyện." },
            { question: "Điền 'ch' hoặc 'tr' vào chỗ trống: ...uồng gà, ...ung thành, ...ống gậy.", hint: "Phân biệt c hay t", answer: "chuồng gà, trung thành, chống gậy." },
            { question: "Viết 3 câu tả về chiếc bút chì của em.", hint: "Nó màu gì? Dài bao nhiêu?", answer: "Chiếc bút chì của em màu vàng. Nó dài bằng một gang tay. Ngòi bút màu đen rất dễ viết." },
            { question: "Gạch chân từ chỉ đặc điểm: 'Mùa thu không khí mát mẻ, bầu trời xanh ngắt.'", hint: "Từ nói về tính chất", answer: "mát mẻ, xanh ngắt." },
            { question: "Tìm từ trái nghĩa với: 'chăm chỉ', 'cao', 'hiền'.", hint: "Nghĩa ngược lại", answer: "lười biếng, thấp, dữ/ác." },
            { question: "Nối: 'Con mèo' - 'bắt chuột'; 'Bác nông dân' - 'cày ruộng'; 'Cô giáo' - 'giảng bài'.", hint: "Nghê nghiệp và hoạt động", answer: "Mèo-chuột; Nông dân-ruộng; Cô giáo-bài." },
            { question: "Viết thiệp chúc Tết đơn giản tặng ông bà.", hint: "Chúc ông bà mạnh khỏe...", answer: "Cháu chúc ông bà năm mới mạnh khỏe, sống lâu trăm tuổi." },
            { question: "Sắp xếp từ thành câu: 'em / học / học / toán / ở / thích / rất'.", hint: "Em thích...", answer: "Em rất thích học toán ở trường." },
            { question: "Phân biệt dấu hỏi hay dấu ngã: 'mỡ' bụng, 'mở' cửa, 'ngả' nghiêng, 'ngã' xe.", hint: "Phát âm chuẩn", answer: "Đúng như gợi ý." },
            { question: "Giải câu đố: 'Cày trên đồng ruộng trắng phau, khát xuống uống nước giếng sâu đen ngòm.' - Là cái gì?", hint: "Vật dùng để viết", answer: "Cây bút mực." },
            { question: "Tìm 3 từ chỉ đồ vật trong nhà của em.", hint: "Bàn, ghế...", answer: "Cái bàn, cái ghế, cái giường, tủ lạnh." },
            { question: "Đặt một câu kể về mẹ của em.", hint: "Mẹ em rất...", answer: "Mẹ em là người phụ nữ tuyệt vời nhất." },
            { question: "Viết 2 câu tả về cô giáo chủ nhiệm của em.", hint: "Cô tên là gì? Cô thế nào?", answer: "Cô giáo em tên là Lan. Cô rất hiền và dạy học rất hay." },
            { question: "Đặt một câu với từ 'siêng năng'.", hint: "Bé ... học bài.", answer: "Bé Thảo rất siêng năng học bài mỗi tối." },
            { question: "Tìm từ chỉ hoạt động trong câu: 'Bé đang quét nhà giúp mẹ.'", hint: "Bé làm gì?", answer: "quét nhà." },
            { question: "Đặt câu kiểu 'Ai thế nào?' tả về con mèo.", hint: "Con mèo rất...", answer: "Con mèo nhà em rất lười biếng." },
            { question: "Tìm từ chỉ sự vật trong câu: 'Đàn cò trắng đang bay lượn.'", hint: "Con gì?", answer: "Đàn cò / Cò." },
            { question: "Câu 'Em là học sinh lớp 2' thuộc kiểu câu gì?", hint: "Ai là gì?", answer: "Kiểu câu Ai là gì?" },
            { question: "Tìm từ chỉ đặc điểm của quả xoài chín.", hint: "Màu gì? Vị thế nào?", answer: "Vàng, ngọt" },
            { question: "Tìm 2 từ chỉ đặc điểm của biển cả.", hint: "Rộng lớn, xanh ngắt...", answer: "Rộng lớn, xanh ngắt, mênh mông." },
            { question: "Đặt câu hỏi cho bộ phận in đậm: 'Lớp em **đang học bài**'.", hint: "Lớp em làm gì?", answer: "Lớp em đang làm gì?" },
            { question: "Tìm từ cùng nghĩa với 'chăm chỉ'.", hint: "Siêng năng, ...", answer: "Siêng năng, cần cù." }
        ],
        "toan": [
            { question: "Tính: 36 + 24 = ?", hint: "Cẩn thận phép cộng có nhớ", answer: "60" },
            { question: "Số liền trước số 100 là số nào?", hint: "Lấy 100 trừ đi 1", answer: "99" },
            { question: "Số lớn nhất có 2 chữ số khác nhau là số nào?", hint: "Số hàng chục là 9, hàng đơn vị khác 9", answer: "98" },
            { question: "Trong phép tính 45 - 20 = 25, số 45 gọi là gì?", hint: "Số bị trừ, số trừ hay hiệu?", answer: "Số bị trừ" },
            { question: "Một đoạn thẳng dài 15cm, bớt đi 6cm. Hỏi còn lại bao nhiêu?", hint: "15 - 6", answer: "9cm" },
            { question: "20dm bằng bao nhiêu mét?", hint: "1m = 10dm", answer: "2m" },
            { question: "Tính: 5 x 4 + 12 = ?", hint: "Nhân trước cộng sau", answer: "32" },
            { question: "Mẹ có 15 quả cam, chia đều vào 5 đĩa. Mỗi đĩa có mấy quả?", hint: "15 chia 5", answer: "3 quả" },
            { question: "Số có 3 chữ số, hàng trăm là 2, hàng chục là 0, hàng đơn vị là 5.", hint: "Viết số", answer: "205" },
            { question: "Số tròn chục lớn nhất nhỏ hơn 100 là?", hint: "90, 80...", answer: "90" },
            { question: "Tính: 2 x 9 = ?", hint: "Bảng nhân 2", answer: "18" },
            { question: "Tính: 40 : 5 = ?", hint: "Bảng chia 5", answer: "8" },
            { question: "Hình vuông có mấy cạnh bằng nhau?", hint: "Hình có 4 cạnh...", answer: "4 cạnh bằng nhau" },
            { question: "Mỗi lọ hoa có 5 bông, có 6 lọ như thế. Hỏi có tất cả bao nhiêu bông hoa?", hint: "5 x 6", answer: "30 bông" },
            { question: "Số nhỏ nhất có 2 chữ số giống nhau là?", hint: "11, 22...", answer: "11" },
            { question: "Tính: 5 x 8 = ?", hint: "Bảng nhân 5", answer: "40" },
            { question: "Tìm x: x + 25 = 100", hint: "x = 100 - 25", answer: "75" },
            { question: "Hình có 3 cạnh và 3 đỉnh là hình gì?", hint: "Hình...", answer: "Hình tam giác" },
            { question: "Tính: 134 + 56 = ?", hint: "Cộng hàng đơn vị, chục, trăm", answer: "190" },
            { question: "Tính: 200 - 125 = ?", hint: "Trừ có nhớ", answer: "75" },
            { question: "Một sợi dây dài 2m, cắt đi 15dm. Hỏi còn lại bao nhiêu đề-xi-mét?", hint: "2m = 20dm", answer: "5dm" },
            { question: "Tính nhanh: 5 x 7 + 15 = ?", hint: "35 + 15", answer: "50" }
        ],
        "tnxh": [
            { question: "Kể tên các thành viên trong gia đình em.", hint: "Ông, bà, bố, mẹ...", answer: "Bé tự kể tên người thân." },
            { question: "Vì sao không nên ăn thức ăn đã ôi thiu?", hint: "Gây đau bụng...", answer: "Vì dễ bị ngộ độc thực phẩm và vi khuẩn gây bệnh." },
            { question: "Kể tên 3 đồ vật sắc nhọn trong nhà cần cẩn thận.", hint: "Dao, kéo...", answer: "Dao, kéo, kim khâu." },
            { question: "Biển báo hình tròn, viền đỏ, nền trắng có hình xe đạp là biển gì?", hint: "Cấm hay được đi?", answer: "Biển cấm xe đạp." },
            { question: "Động vật cần những gì để sống?", hint: "Thức ăn, nước uống...", answer: "Thức ăn, nước uống, không khí và ánh sáng." },
            { question: "Ăn uống như thế nào để cơ thể khỏe mạnh?", hint: "Ăn đủ chất, đúng giờ...", answer: "Ăn uống đủ chất, ăn nhiều rau quả và uống đủ nước." },
            { question: "Khi gặp đèn đỏ, người tham gia giao thông phải làm gì?", hint: "Dừng lại hay đi tiếp?", answer: "Phải dừng lại." },
            { question: "Răng của em cần được chăm sóc như thế nào?", hint: "Đánh răng mấy lần?", answer: "Cần đánh răng ít nhất 2 lần mỗi ngày (sáng và tối)." },
            { question: "Kể tên các bộ phận của một cái cây.", hint: "Rễ, thân...", answer: "Rễ, thân, lá, hoa, quả." },
            { question: "Con muỗi gây ra bệnh nguy hiểm gì?", hint: "Sốt xuất huyết...", answer: "Bệnh sốt xuất huyết." },
            { question: "Kể tên 2 loài hoa nở vào mùa xuân.", hint: "Hoa đào, ...", answer: "Hoa đào, hoa mai, hoa cúc." },
            { question: "Tại sao không nên vừa ăn vừa chạy nhảy?", hint: "Đau bụng, sặc...", answer: "Dễ bị sặc và gây đau dạ dày." },
            { question: "Bản đồ Việt Nam có hình dáng giống chữ cái nào?", hint: "Chữ ...", answer: "Chữ S" }
        ],
        "english": [
            { question: "What is your name?", hint: "My name is...", answer: "My name is Thao." },
            { question: "Count from 1 to 5 in English.", hint: "One, two...", answer: "One, two, three, four, five." },
            { question: "What color is a banana?", hint: "Yellow, Red, Blue?", answer: "Yellow." },
            { question: "Apple là quả gì?", hint: "Tròn, màu đỏ...", answer: "Quả táo." },
            { question: "Kể tên 3 đồ dùng học tập bằng tiếng Anh.", hint: "Pen, book...", answer: "Pen, pencil, book, ruler." },
            { question: "What animal says 'Meow Meow'?", hint: "Cat or Dog?", answer: "A cat." },
            { question: "Dịch sang tiếng Anh: 'Xin chào'.", hint: "H...", answer: "Hello / Hi." },
            { question: "Màu đỏ trong tiếng Anh là gì?", hint: "R...", answer: "Red." },
            { question: "Cái mũ trong tiếng Anh là gì?", hint: "H...", answer: "Hat." }
        ],
        "daoduc": [
            { question: "Khi mượn đồ của bạn, em nên làm gì sau khi dùng xong?", hint: "Trả lại hay giữ luôn?", answer: "Cần trả lại cho bạn và nói lời cảm ơn." },
            { question: "Gặp người lớn tuổi, em nên chào hỏi thế nào?", hint: "Lễ phép...", answer: "Khoanh tay chào lễ phép và tươi cười." },
            { question: "Thấy bạn ngã, em sẽ làm gì?", hint: "Đỡ bạn dậy...", answer: "Đỡ bạn dậy và hỏi xem bạn có đau không." },
            { question: "Tại sao chúng ta phải tiết kiệm điện, nước?", hint: "Bảo vệ tài nguyên...", answer: "Để tiết kiệm tiền cho bố mẹ và bảo vệ tài nguyên thiên nhiên." },
            { question: "Khi làm sai, em nên làm gì?", hint: "Xin lỗi...", answer: "Dũng cảm nhận lỗi và xin lỗi chân thành." },
            { question: "Lễ phép với thầy cô giáo thể hiện điều gì?", hint: "Kính trọng...", answer: "Thể hiện lòng kính trọng và biết ơn công dạy bảo." },
            { question: "Khi nhận được quà, em nên nói gì?", hint: "Cảm ơn...", answer: "Em nên nói lời cảm ơn lễ phép." },
            { question: "Tại sao phải đi học đúng giờ?", hint: "Kỷ luật...", answer: "Để không bỏ lỡ bài học và rèn luyện tính kỷ luật." }
        ]
    },
};

// ============================================================
// DỮ LIỆU BÉ HẢI LINH - LỚP 3 (KẾT NỐI TRI THỨC)
// ============================================================
const HAILINH_DATA = {
    name: "Nguyễn Hải Linh",
    shortName: "Hải Linh",
    grade: 3,
    emoji: "🦋",
    color: "#2979FF",
    colorLight: "#E3F2FD",
    mascot: "🦄",
    mascotName: "Sky",
    themeName: "Vương quốc Đại dương",

    themes: {
        "2025-09": "🎨 Khám phá thế giới mới",
        "2025-10": "🤝 Gắn kết bạn bè",
        "2025-11": "👩‍🏫 Biết ơn thầy cô",
        "2025-12": "🏘️ Quê hương tươi đẹp",
        "2026-01": "🌸 Đón Tết yêu thương",
        "2026-02": "🦖 Khám phá thiên nhiên",
        "2026-03": "⚙️ Sáng tạo và Công nghệ",
        "2026-04": "🌍 Bảo vệ Trái Đất",
        "2026-05": "🏅 Chinh phục ước mơ",
    },

    schedule: {
        1: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Tin học", duration: "1 tiết" }, { subject: "Đạo Đức", duration: "1 tiết" }],
        2: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Tự nhiên & Xã hội", duration: "1 tiết" }, { subject: "Tiếng Anh", duration: "1 tiết" }, { subject: "Giáo dục thể chất", duration: "1 tiết" }],
        3: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Công nghệ", duration: "1 tiết" }, { subject: "Nghệ thuật (Âm nhạc)", duration: "1 tiết" }],
        4: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Tiếng Anh", duration: "1 tiết" }, { subject: "Tự nhiên & Xã hội", duration: "1 tiết" }, { subject: "Nghệ thuật (Mỹ thuật)", duration: "1 tiết" }],
        5: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "2 tiết" }, { subject: "Hoạt động trải nghiệm", duration: "1 tiết" }, { subject: "Giáo dục thể chất", duration: "1 tiết" }],
    },

    weeklyContent: {
        1: { week: "Tuần 1", tviet: "B1: Ngày khai trường. Luyện từ: Từ chỉ sự vật. Viết: Đoạn văn kể về mùa hè.", toan: "Ôn tập các số đến 1000. Phép cộng, phép trừ có nhớ (Phạm vi 100).", tnxh: "B1: Họ hàng nội ngoại.", daoduc: "An toàn giao thông khi đi bộ.", english: "Unit 1: Hello again - Lesson 1" },
        2: { week: "Tuần 2", tviet: "B2: Về thăm quê. Luyện câu: Câu giới thiệu. Viết: Tả một đồ dùng học tập.", toan: "Ôn tập bảng nhân 2, bảng chia 2, bảng nhân 5, bảng chia 5.", tnxh: "B2: Phòng tránh hỏa hoạn khi ở nhà.", daoduc: "An toàn giao thông khi đi bộ (p2)", english: "Unit 1: Hello again - Lesson 2" },
        3: { week: "Tuần 3", tviet: "B3: Cánh rừng trong lòng thành phố. Luyện từ: Từ chỉ đặc điểm. Viết: Kể về một hoạt động.", toan: "Tìm thành phần chưa biết của phép tính. Luyện tập cộng trừ.", tnxh: "B3: Vệ sinh xung quanh nhà ở.", daoduc: "Kính yêu Bác Hồ", english: "Unit 2: Family members - Lesson 1" },
        4: { week: "Tuần 4", tviet: "B4: Những cái tên đáng yêu. Nói và nghe: Kể chuyện. Viết: Đơn xin vào Đội.", toan: "Bảng nhân 3, bảng chia 3. Luyện tập tính toán.", tnxh: "B4: Ôn tập chủ đề Gia đình.", daoduc: "Kính yêu Bác Hồ (p2)", english: "Unit 2: Family members - Lesson 2" },
        5: { week: "Tuần 5", tviet: "B5: Nhật ký trưởng thành. Luyện câu: Câu nêu hoạt động. Viết: Kể về bạn bè.", toan: "Bảng nhân 4, bảng chia 4. Luyện tập phép tính.", tnxh: "B5: Các thế hệ trong gia đình.", daoduc: "Giữ lời hứa", english: "Unit 3: My body - Lesson 1" },
        6: { week: "Tuần 6", tviet: "B6: Em yêu mùa hè. Luyện từ: Từ chỉ hoạt động. Viết: Tả con vật em yêu.", toan: "Bảng nhân 6, bảng chia 6. Nhân số có hai chữ số với số có một chữ số.", tnxh: "B6: Nghề nghiệp của người thân.", daoduc: "Giữ lời hứa (p2)" },
        7: { week: "Tuần 7", tviet: "B7: Những bậc đá chạm mây. Viết: Đoạn văn nêu cảm nghĩ về nhân vật.", toan: "Bảng nhân 7, bảng chia 7. Gấp một số lên nhiều lần.", tnxh: "B7: Hoạt động tình nguyện.", daoduc: "Quan tâm hàng xóm" },
        8: { week: "Tuần 8", tviet: "B8: Mùa thu của em. Luyện từ: Mở rộng vốn từ về trường học.", toan: "Bảng nhân 8, bảng chia 8. Giảm một số đi nhiều lần.", tnxh: "B8: Ôn tập chủ đề Trường học.", daoduc: "Biết ơn người lao động" },
        9: { week: "Tuần 9", tviet: "Ôn tập và đánh giá giữa HK1.", toan: "Kiểm tra giữa HK1. Bảng nhân 9, bảng chia 9.", tnxh: "B9: Một số cơ quan trong cơ thể.", daoduc: "Đánh giá giữa HK1" },
        10: { week: "Tuần 10", tviet: "B10: Lời giải toán đặc biệt. Luyện câu: Câu nêu đặc điểm.", toan: "Chia số có hai chữ số cho số có một chữ số. Phép chia hết và phép chia có dư.", tnxh: "B10: Cơ quan tiêu hóa.", daoduc: "Tự hào truyền thống quê hương" },
        11: { week: "Tuần 11", tviet: "B11: Bài tập làm văn. Viết: Đoạn văn tả một hoạt động ở trường.", toan: "Xăng-ti-mét vuông. Diện tích hình chữ nhật, hình vuông.", tnxh: "B11: Cơ quan tuần hoàn.", daoduc: "Chăm sóc và bảo vệ cơ quan tuần hoàn" },
        12: { week: "Tuần 12", tviet: "B12: Bản tin ngày hội. Luyện từ: Danh từ (tiếp).", toan: "Các số có bốn chữ số. Số 10.000.", tnxh: "B12: Cơ quan thần kinh.", daoduc: "Xây dựng cộng đồng văn minh" },
        13: { week: "Tuần 13", tviet: "B13: Anh Đom Đóm. Luyện từ: Từ chỉ đặc điểm. Viết: Đoạn văn kể về một người bạn.", toan: "Gam. Mi-li-lít. Nhiệt độ và đơn vị đo nhiệt độ.", tnxh: "B13: Chăm sóc và bảo vệ cơ quan thần kinh.", daoduc: "Đi bộ an toàn" },
        14: { week: "Tuần 14", tviet: "B14: Học nghề. Nói và nghe: Kể chuyện. Viết: Đơn xin vào Đội (tiếp).", toan: "Ôn tập về hình học và đo lường. Thực hành trải nghiệm.", tnxh: "B14: Ôn tập chủ đề Con người và sức khỏe.", daoduc: "Em khám phá thế giới" },
        15: { week: "Tuần 15", tviet: "B15: Thư viện. Luyện từ: Mở rộng vốn từ về nhà trường. Viết: Tả đồ dùng học tập.", toan: "Phép cộng trong phạm vi 10.000. Phép trừ trong phạm vi 10.000.", tnxh: "B15: Thực vật quanh em.", daoduc: "Yêu quý bạn bè" },
        16: { week: "Tuần 16", tviet: "B16: Ngày em vào Đội. Luyện câu: Câu hỏi. Viết: Đoạn văn nêu tình cảm về một người thân.", toan: "Luyện tập chung: Cộng, trừ trong phạm vi 10.000.", tnxh: "B16: Động vật quanh em.", daoduc: "Biết ơn người lao động" },
        17: { week: "Tuần 17", tviet: "Ôn tập cuối HK1 (Đọc, viết, nghe).", toan: "Ôn tập các số trong phạm vi 10.000. Hình học & Đo lường HK1.", tnxh: "Ôn tập chủ đề Thực vật và Động vật.", daoduc: "Ôn tập cuối kỳ 1" },
        18: { week: "Tuần 18", tviet: "Kiểm tra học kỳ 1.", toan: "Kiểm tra học kỳ 1.", tnxh: "Trải nghiệm thiên nhiên.", daoduc: "Đánh giá HK1" },
        19: { week: "Tuần 19", tviet: "B17: Ngưỡng cửa. Luyện từ: Từ chỉ sự vật. Viết: Kể về một kỷ niệm.", toan: "Các số có năm chữ số. Số 100.000.", tnxh: "B17: Sử dụng hợp lý thực vật và động vật.", daoduc: "An toàn khi sử dụng thiết bị điện" },
        20: { week: "Tuần 20", tviet: "B18: Món quà đặc biệt. Luyện câu: Câu khiến. Viết: Đoạn văn tả một đồ chơi.", toan: "So sánh các số có năm chữ số. Thứ tự số.", tnxh: "B18: Ôn tập chủ đề Thực vật và Động vật.", daoduc: "Tiết kiệm nước" },
        21: { week: "Tuần 21", tviet: "B19: Khi cả nhà bé tí. Luyện từ: Từ chỉ đặc điểm. Viết: Kể một việc làm tốt.", toan: "Phép cộng trong phạm vi 100.000. Phép trừ trong phạm vi 100.000.", tnxh: "B19: Cơ quan tiêu hóa (tiếp).", daoduc: "Tôn trọng tài sản của người khác" },
        22: { week: "Tuần 22", tviet: "B20: Trò chuyện cùng mẹ. Nói và nghe: Kể chuyện. Viết: Thư thăm hỏi.", toan: "Luyện tập chung: Cộng, trừ có nhớ phạm vi 100.000.", tnxh: "B20: Cơ quan tuần hoàn (tiếp).", daoduc: "Kiên trì vượt khó" },
        23: { week: "Tuần 23", tviet: "B21: Tia nắng bé nhỏ. Luyện từ: Mở rộng vốn từ về thiên nhiên.", toan: "Làm quen với chữ số La Mã. Nhân số có năm chữ số với số một chữ số.", tnxh: "B21: Cơ quan thần kinh (tiếp).", daoduc: "Biết ơn những người có công với quê hương" },
        24: { week: "Tuần 24", tviet: "B22: Những sắc màu thiên nhiên. Viết: Đoạn văn tả bầu trời.", toan: "Chia số có năm chữ số cho số có một chữ số. Phép chia hết và có dư.", tnxh: "B22: Ôn tập chủ đề Con người.", daoduc: "Quan tâm đến người khuyết tật" },
        25: { week: "Tuần 25", tviet: "B23: Bài ca trái đất. Luyện câu: Câu cảm. Viết: Viết về bảo vệ môi trường.", toan: "Bài toán liên quan đến rút về đơn vị. Tiền Việt Nam.", tnxh: "B23: Bầu trời ban ngày và ban đêm.", daoduc: "Tìm hiểu về quê hương" },
        26: { week: "Tuần 26", tviet: "B24: Những người bạn quanh em. Nói và nghe: Trao đổi về muông thú.", toan: "Luyện tập về phép nhân, phép chia phạm vi 100.000.", tnxh: "B24: Các đới khí hậu. Các châu lục và đại dương.", daoduc: "Em yêu Tổ quốc Việt Nam" },
        27: { week: "Tuần 27", tviet: "Ôn tập giữa HK2.", toan: "Kiểm tra giữa HK2. Khám phá số liệu và biểu đồ tranh.", tnxh: "B25: Một số hiện tượng thiên tai.", daoduc: "Đánh giá giữa HK2" },
        28: { week: "Tuần 28", tviet: "B25: Đất nước ngàn năm. Luyện từ: Danh từ, Động từ, Tính từ ôn tập.", toan: "Diện tích một hình. Đơn vị đo diện tích cm2.", tnxh: "B26: Phòng tránh thiên tai.", daoduc: "Xử lý tình huống nguy hiểm" },
        29: { week: "Tuần 29", tviet: "B26: Một mái nhà chung. Viết: Đoạn văn tả cảnh đẹp quê hương.", toan: "Diện tích hình chữ nhật. Diện tích hình vuông.", tnxh: "Ôn tập chủ đề Trái đất và bầu trời.", daoduc: "Bảo vệ môi trường" },
        30: { week: "Tuần 30", tviet: "B27: Những người hàng xóm. Luyện câu: Dấu gạch ngang.", toan: "Luyện tập chung về diện tích hình học.", tnxh: "B27: Các mùa trong năm (tiếp).", daoduc: "Tiết kiệm năng lượng" },
        31: { week: "Tuần 31", tviet: "B28: Đưa tin. Nói và nghe: Kể chuyện về những tấm gương sáng.", toan: "Thu thập, phân loại, kiểm đếm số liệu. Biểu đồ tranh.", tnxh: "B28: Bề mặt Trái đất.", daoduc: "Tự giác học tập" },
        32: { week: "Tuần 32", tviet: "B29: Ngọn lửa Olympic. Luyện từ: Từ chỉ các môn thể thao.", toan: "Khả năng xảy ra của một sự việc. Ôn tập số học.", tnxh: "B29: Trái đất trong hệ mặt trời.", daoduc: "Thực hiện cam kết" },
        33: { week: "Tuần 33", tviet: "Ôn tập cuối năm 1: Tiếng Việt kỳ 1.", toan: "Ôn tập hình học và đo lường cuối năm.", tnxh: "Ôn tập tổng hợp chủ đề xã hội.", daoduc: "Lòng nhân ái" },
        34: { week: "Tuần 34", tviet: "Ôn tập cuối năm 2: Tiếng Việt kỳ 2.", toan: "Ôn tập tổng kết: Giải bài toán có lời văn.", tnxh: "Ôn tập thế giới tự nhiên.", daoduc: "Tự đánh giá năm học" },
        35: { week: "Tuần 35", tviet: "Kiểm tra cuối năm.", toan: "Kiểm tra cuối năm.", tnxh: "Tổng kết năm học.", daoduc: "Chào hè rực rỡ" },
    },

    bonusExercises: {
        "tiengviet": [
            { question: "Tìm từ chỉ sự vật trong câu: 'Mèo con đang đùa giỡn với cuộn len.'", hint: "Con vật, đồ vật...", answer: "Mèo con, cuộn len." },
            { question: "Điền dấu câu thích hợp vào cuối câu: 'Bạn đã làm bài tập chưa...'", hint: "Câu hỏi hay kể?", answer: "?" },
            { question: "Tìm từ trái nghĩa với 'yêu thương'.", hint: "Ghét...", answer: "Căm ghét / Ghét bỏ / Ghét." },
            { question: "Đặt một câu kể về một người bạn thân của em.", hint: "Bạn em tên gì?", answer: "Ví dụ: Lan là người bạn thân nhất của em." },
            { question: "Tìm từ chỉ hoạt động: 'Chim sơn ca hót líu lo trên cành cây.'", hint: "Làm gì?", answer: "hót." },
            { question: "Em hãy sử dụng biện pháp so sánh để tả đôi mắt của em bé.", hint: "Đôi mắt tròn như...", answer: "Đôi mắt em bé tròn xoe như hai hạt nhãn." },
            { question: "Tìm 3 từ chỉ tình cảm của em đối với thầy cô giáo.", hint: "Kính trọng, biết ơn...", answer: "Kính trọng, biết ơn, yêu quý." },
            { question: "Đặt một câu kiểu 'Ai làm gì?' nói về bác bác sĩ.", hint: "Bác sĩ đang...", answer: "Bác sĩ đang khám bệnh cho bệnh nhân." },
            { question: "Tìm từ chỉ đặc điểm trong câu: 'Bông hoa hồng đỏ thắm và tỏa hương thơm ngát.'", hint: "Màu sắc, mùi hương...", answer: "đỏ thắm, thơm ngát." },
            { question: "Giải câu đố: 'Cái gì không có chân mà đi khắp thế gian?'", hint: "Chạy trên đường hoặc bay...", answer: "Con gió / Mây / Ý nghĩ." },
            { question: "Tìm từ chỉ sự vật là con vật trong câu: 'Đàn cò trắng đang bay lượn trên đồng lúa.'", hint: "Con gì?", answer: "Đàn cò / Cò." },
            { question: "Em hãy đặt một câu có hình ảnh so sánh về ngôi trường.", hint: "Ngôi trường như...", answer: "Ví dụ: Ngôi trường như ngôi nhà thứ hai của em." },
            { question: "Tìm từ trái nghĩa với 'siêng năng'.", hint: "L...", answer: "Lười biếng / Lười." },
            { question: "Điền dấu phẩy thích hợp: 'Em thích ăn cam quýt xoài và nhãn.'", hint: "Ngăn cách các quả", answer: "Em thích ăn cam, quýt, xoài và nhãn." },
            { question: "Tìm từ chỉ hoạt động của bác nông dân: 'Bác nông dân đang cày ruộng.'", hint: "Làm gì?", answer: "cày ruộng / cày." },
            { question: "Giải câu đố: 'Cây gì xanh lá xanh cành, nở hoa rực rỡ gọi hè đến nhanh?'", hint: "Hoa màu đỏ...", answer: "Cây phượng / Hoa phượng." },
            { question: "Tìm từ chỉ đặc điểm của mái tóc bà: 'Mái tóc bà bạc trắng như cước.'", hint: "Màu sắc thế nào?", answer: "bạc trắng." },
            { question: "Đặt câu hỏi 'Ai là gì?' để giới thiệu về bố em.", hint: "Bố em là...", answer: "Bố em là một người thợ mộc." },
            { question: "Sử dụng biện pháp nhân hóa để tả đám mây.", hint: "Đám mây đang làm gì như con người?", answer: "Ví dụ: Những đám mây trắng nhẩn nhơ dạo chơi trên bầu trời." },
            { question: "Tìm 3 tính từ tả bầu trời buổi sáng.", hint: "Trong xanh, ...", answer: "Trong xanh, cao vời vợi, ửng hồng." },
            { question: "Xác định chủ ngữ trong câu: 'Mùa xuân đã về trên quê hương em.'", hint: "Cái gì đã về?", answer: "Mùa xuân." },
            { question: "Tìm từ trái nghĩa với 'dũng cảm'.", hint: "Nghịch với anh hùng", answer: "Hèn nhát / Nhát gan." },
            { question: "Điền từ so sánh: 'Mắt mèo tròn ... hai hòn bi xanh.'", hint: "Như, giống như...", answer: "như / giống như." }
        ],
        "toan": [
            { question: "7 x 8 = ?", hint: "Bảng nhân 7", answer: "56" },
            { question: "42 : 6 = ?", hint: "Bảng chia 6", answer: "7" },
            { question: "Số liền sau của 999 là?", hint: "+1", answer: "1000" },
            { question: "Tính: 150 + 250 = ?", hint: "Cộng tròn trăm", answer: "400" },
            { question: "Một hình vuông có cạnh 5cm. Chu vi là bao nhiêu?", hint: "Cạnh x 4", answer: "20cm" },
            { question: "Số lớn nhất có bốn chữ số là số nào?", hint: "Chữ số 9...", answer: "9999" },
            { question: "Đổi đơn vị: 2kg 500g = ... g", hint: "1kg = 1000g", answer: "2500g" },
            { question: "Tính: 3000 x 3 = ?", hint: "3 x 3 rồi viết thêm số 0", answer: "9000" },
            { question: "Một đồng hồ chỉ 7 giờ 15 phút. 15 phút sau là mấy giờ?", hint: "7 giờ 15 + 15", answer: "7 giờ 30 phút" },
            { question: "Số nào là số La Mã của số 9?", hint: "I, V, X...", answer: "IX" },
            { question: "8 x 9 = ?", hint: "Bảng nhân 8", answer: "72" },
            { question: "63 : 7 = ?", hint: "Bảng chia 7", answer: "9" },
            { question: "Số gồm 5 nghìn, 4 trăm và 2 đơn vị viết là?", hint: "5, 4, 0, 2", answer: "5402" },
            { question: "Tính diện tích hình chữ nhật có chiều dài 6cm, chiều rộng 4cm.", hint: "Dài x Rộng", answer: "24 cm2" },
            { question: "Trong phép chia 45 : 5 = 9, số 45 gọi là gì?", hint: "Số bị chia, số chia hay thương?", answer: "Số bị chia" },
            { question: "Số 10.000 đọc là gì?", hint: "Mười ...", answer: "Mười nghìn" },
            { question: "Có 24 cái kẹo chia đều cho 3 bạn. Mỗi bạn được mấy cái?", hint: "24 : 3", answer: "8 cái" },
            { question: "Số nhỏ nhất có 5 chữ số là số nào?", hint: "1 và bốn số 0", answer: "10000" },
            { question: "Tính: 1234 + 5678 = ?", hint: "Cộng không nhớ và có nhớ", answer: "6912" },
            { question: "Tính: 10000 - 999 = ?", hint: "Cẩn thận hàng đơn vị", answer: "9001" },
            { question: "Tính: 24 x 5 = ?", hint: "Nhân hàng đơn vị trước", answer: "120" },
            { question: "Tính: 81 : 9 + 45 = ?", hint: "Chia trước cộng sau", answer: "54" },
            { question: "Một hình chữ nhật có chu vi 20cm, chiều dài 6cm. Chiều rộng là bao nhiêu?", hint: "Rộng = (Chu vi : 2) - Dài", answer: "4cm" }
        ],
        "tnxh": [
            { question: "Cơ quan nào giúp cơ thể tiêu hóa thức ăn?", hint: "Dạ dày, ruột...", answer: "Cơ quan tiêu hóa." },
            { question: "Chúng ta nên làm gì để bảo vệ môi trường?", hint: "Rác thải...", answer: "Không vứt rác bừa bãi / Không xả rác / Trồng nhiều cây xanh." },
            { question: "Kể tên các thế hệ trong gia đình em.", hint: "Ông bà, bố mẹ...", answer: "Bé tự kể." },
            { question: "Tại sao chúng ta phải rửa tay trước khi ăn?", hint: "Vi khuẩn...", answer: "Để loại bỏ vi khuẩn và tránh bị đau bụng." },
            { question: "Cơ quan nào điều khiển mọi hoạt động của cơ thể?", hint: "Ở trong đầu...", answer: "Não (Cơ quan thần kinh)." },
            { question: "Kể tên 3 con vật sống dưới nước.", hint: "Cá, tôm...", answer: "Cá, tôm, cua, lươn, mực." },
            { question: "Trái Đất có dạng hình gì?", hint: "Hình cầu hay hình vuông?", answer: "Hình cầu." },
            { question: "Kể tên 2 cơ quan bên trong cơ thể người.", hint: "Tim, phổi...", answer: "Tim, phổi, dạ dày, não, gan." },
            { question: "Kể tên 3 hành tinh trong hệ mặt trời.", hint: "Trái Đất, sao Hỏa...", answer: "Trái Đất, Sao Hỏa, Sao Kim, Sao Mộc, Sao Thổ." },
            { question: "Cơ quan tuần hoàn có vai trò gì?", hint: "Vận chuyển máu...", answer: "Vận chuyển máu đi nuôi khắp cơ thể." }
        ],
        "english": [
            { question: "How are you?", hint: "I am fine...", answer: "I am fine, thank you." },
            { question: "What is this? (Cầm một quyển sách)", hint: "It is a...", answer: "It is a book." },
            { question: "Count from 10 to 20.", hint: "Ten, eleven...", answer: "Ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty." },
            { question: "What color is the sky?", hint: "B...", answer: "It is blue." },
            { question: "Dịch: 'Đây là anh trai của tôi.'", hint: "This is my...", answer: "This is my brother." },
            { question: "How many days are there in a week?", hint: "One, two...", answer: "Seven days." }
        ],
        "daoduc": [
            { question: "Em nên làm gì khi thấy bạn bị bắt nạt?", hint: "Báo cô giáo...", answer: "Báo ngay cho thầy cô hoặc người lớn để giúp đỡ bạn." },
            { question: "Tại sao cần phải giữ lời hứa?", hint: "Để mọi người tin tưởng", answer: "Để mọi người tin tưởng và yêu quý mình hơn." },
            { question: "Gia đình yêu thương nhau giúp ích gì?", hint: "Hạnh phúc...", answer: "Giúp mọi người hạnh phúc và gắn bó với nhau hơn." },
            { question: "Đi bộ an toàn là đi như thế nào?", hint: "Đi trên vỉa hè...", answer: "Đi trên vỉa hè, nếu không có vỉa hè thì đi sát mép đường bên phải." }
        ]
    },
};

// ============================================================
// DỮ LIỆU BÉ DIỆP - LỚP 4 (KẾT NỐI TRI THỨC)
// ============================================================
const DIEP_DATA = {
    name: "Nguyễn Ngọc Diệp",
    shortName: "Diệp",
    grade: 4,
    emoji: "⭐",
    color: "#7C4DFF",
    colorLight: "#EDE7FF",
    mascot: "🔥",
    mascotName: "Spark",
    themeName: "Lâu đài Phép thuật",

    themes: {
        "2025-09": "✨ Khám phá thế giới tri thức",
        "2025-10": "🍁 Trải nghiệm và sáng tạo",
        "2025-11": "📖 Nhớ ơn thầy cô",
        "2025-12": "🌟 Văn hóa và Lịch sử VN",
        "2026-01": "🎊 Ôn tập & Kế hoạch năm mới",
        "2026-02": "🦁 Bản sắc dân tộc",
        "2026-03": "🔬 Khoa học và đời sống",
        "2026-04": "🌺 Hòa bình và Hữu nghị",
        "2026-05": "🥇 Tự hào học sinh lớp 4",
    },

    schedule: {
        1: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Khoa học", duration: "1 tiết" }, { subject: "Đạo Đức", duration: "1 tiết" }],
        2: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Lịch sử & Địa lý", duration: "1 tiết" }, { subject: "Tiếng Anh", duration: "1 tiết" }, { subject: "Tin học", duration: "1 tiết" }],
        3: [{ subject: "Tiếng Việt", duration: "2 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Công nghệ", duration: "1 tiết" }, { subject: "Nghệ thuật (Mỹ thuật)", duration: "1 tiết" }],
        4: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "1 tiết" }, { subject: "Tiếng Anh", duration: "1 tiết" }, { subject: "Lịch sử & Địa lý", duration: "1 tiết" }, { subject: "Nghệ thuật (Âm nhạc)", duration: "1 tiết" }],
        5: [{ subject: "Tiếng Việt", duration: "1 tiết" }, { subject: "Toán", duration: "2 tiết" }, { subject: "Khoa học", duration: "1 tiết" }, { subject: "Hoạt động trải nghiệm", duration: "1 tiết" }],
    },

    weeklyContent: {
        1: { week: "Tuần 1", tviet: "Đọc: Điều kì diệu. Luyện từ: Danh từ. Viết: Tìm hiểu bài văn tả cây cối.", toan: "Ôn tập các số đến 100.000. Biểu thức chứa chữ.", khoahoc: "Tính chất của nước và sự chuyển thể của nước.", lsdia: "Làm quen với bản đồ, lược đồ.", english: "Unit 1: My friends - Lesson 1", tinhoc: "B1: Phần cứng và phần mềm máy tính." },
        2: { week: "Tuần 2", tviet: "Đọc: Thi nhạc. Luyện từ: Danh từ chung và danh từ riêng. Viết: Lập dàn ý tả cây cối.", toan: "Các số có nhiều chữ số. Hàng và lớp. Triệu và lớp triệu.", khoahoc: "Sự chuyển thể của nước và vòng tuần hoàn của nước trong tự nhiên.", lsdia: "Thiên nhiên và con người ở vùng trung du và miền núi Bắc Bộ.", english: "Unit 1: My friends - Lesson 2", congnghe: "B1: Hoa và cây cảnh quanh em." },
        3: { week: "Tuần 3", tviet: "Đọc: Anh em sinh đôi. Luyện từ: Mở rộng vốn từ: Đoàn kết. Viết: Viết bài văn tả cây cối.", toan: "So sánh các số có nhiều chữ số. Làm tròn số đến hàng trăm nghìn.", khoahoc: "Vai trò của nước và bảo vệ nguồn nước.", lsdia: "Lịch sử vùng đất Tổ Hùng Vương.", english: "Unit 1: My friends - Lesson 3", tinhoc: "B2: Gõ bàn phím đúng cách." },
        4: { week: "Tuần 4", tviet: "Đọc: Công chúa và hạt đậu. Luyện câu: Câu kể. Viết: Trả bài văn tả cây cối.", toan: "Góc nhọn, góc tù, góc bẹt. Đo góc đơn vị độ.", khoahoc: "Thành phần và tính chất của không khí.", lsdia: "Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi Bắc Bộ.", english: "Unit 2: My school - Lesson 1", congnghe: "B2: Trồng hoa trong chậu (T1)." },
        5: { week: "Tuần 5", tviet: "Đọc: Thằn lằn xanh và tắc kè. Luyện từ: Động từ. Viết: Tìm hiểu cách viết báo cáo thảo luận nhóm.", toan: "Hai đường thẳng vuông góc. Hai đường thẳng song song.", khoahoc: "Vai trò của không khí và bảo vệ môi trường không khí.", lsdia: "Thiên nhiên vùng Đồng bằng Bắc Bộ.", english: "Unit 2: My school - Lesson 2", tinhoc: "B3: Tìm kiếm thông tin trên Internet." },
        6: { week: "Tuần 6", tviet: "Đọc: Nghệ sĩ trống. Luyện từ: Câu khiến. Viết: Viết báo cáo thảo luận nhóm.", toan: "Yến, tạ, tấn. Giây, thế kỉ. Bảng đơn vị đo khối lượng.", khoahoc: "Ôn tập chủ đề Chất.", lsdia: "Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ." },
        7: { week: "Tuần 7", tviet: "Đọc: Những bức chân dung. Luyện từ: Tính từ. Viết: Viết đoạn văn nêu ý kiến.", toan: "Phép cộng số có nhiều chữ số. Tính chất giao hoán, kết hợp phép cộng.", khoahoc: "Ánh sáng và sự truyền ánh sáng.", lsdia: "Sông Hồng và văn minh sông Hồng." },
        8: { week: "Tuần 8", tviet: "Đọc: Đò ngang. Luyện từ: Câu hỏi. Viết: Tìm hiểu cách viết bài văn kể lại một câu chuyện.", toan: "Phép trừ số có nhiều chữ số. Tìm hai số khi biết tổng và hiệu.", khoahoc: "Ánh sáng đối với sự sống.", lsdia: "Thăng Long - Hà Nội." },
        9: { week: "Tuần 9", tviet: "Ôn tập và đánh giá giữa HK1.", toan: "Kiểm tra giữa HK1. Luyện tập giải toán.", khoahoc: "Đánh giá giữa HK1.", lsdia: "Văn Miếu - Quốc Tử Giám." },
        10: { week: "Tuần 10", tviet: "B10: Bầu trời trong quả trứng. Luyện từ: Biện pháp nhân hóa.", toan: "Nhân với số có một chữ số. Nhân với 10, 100, 1000.", khoahoc: "Sự trao đổi chất ở người.", lsdia: "Thiên nhiên vùng Duyên hải miền Trung." },
        11: { week: "Tuần 11", tviet: "B11: Tiếng nói của cỏ cây. Viết: Viết bài văn kể lại câu chuyện về lòng nhân ái.", toan: "Tính chất giao hoán, kết hợp của phép nhân. Nhân với số có hai chữ số.", khoahoc: "Dinh dưỡng và sức khỏe.", lsdia: "Dân cư và hoạt động sản xuất vùng Duyên hải miền Trung." },
        12: { week: "Tuần 12", tviet: "B12: Tập làm văn kể chuyện (tiếp). Nói và nghe: Kể chuyện.", toan: "Chia cho số có một chữ số. Chia cho 10, 100, 1000.", khoahoc: "Phòng tránh một số bệnh do thiếu dinh dưỡng.", lsdia: "Cố đô Huế." },
        13: { week: "Tuần 13", tviet: "B13: Chủ điểm Biết ơn. Luyện từ: Danh từ (Tiếp).", toan: "Chia cho số có hai chữ số. Thương có chữ số 0.", khoahoc: "Bảo vệ các cơ quan tiêu hóa, tuần hoàn, bài tiết.", lsdia: "Phố cổ Hội An." },
        14: { week: "Tuần 14", tviet: "B14: Người tìm đường lên các vì sao. Viết: Viết đoạn văn nêu cảm nghĩ.", toan: "Luyện tập chung về các phép tính số tự nhiên.", khoahoc: "Ôn tập chủ đề Con người và sức khỏe.", lsdia: "Thiên nhiên vùng Tây Nguyên." },
        15: { week: "Tuần 15", tviet: "B15: Văn hay chữ tốt. Luyện từ: Mở rộng vốn từ: Ý chí.", toan: "Tìm số trung bình cộng. Biểu đồ cột.", khoahoc: "Nhu cầu sống của thực vật.", lsdia: "Dân cư và hoạt động sản xuất ở vùng Tây Nguyên." },
        16: { week: "Tuần 16", tviet: "Ôn tập cuối HK1. Luyện tập tổng hợp.", toan: "Ôn tập hình học và đo lường HK1.", khoahoc: "Sự trao đổi chất ở thực vật.", lsdia: "Lễ hội cồng chiêng Tây Nguyên." },
        17: { week: "Tuần 17", tviet: "Ôn tập tổng kết nội dung HK1.", toan: "Luyện tập giải toán tổng hợp HK1.", khoahoc: "Nhu cầu sống của động vật.", lsdia: "Ôn tập vùng Tây Nguyên." },
        18: { week: "Tuần 18", tviet: "Kiểm tra học kỳ 1.", toan: "Kiểm tra học kỳ 1.", khoahoc: "Kiểm tra học kỳ 1.", lsdia: "Kiểm tra học kỳ 1." },
        19: { week: "Tuần 19", tviet: "B17: Hải thượng Lãn Ông. Luyện từ: Từ điển và cách tra từ điển.", toan: "Khái niệm phân số. Phân số và phép chia số tự nhiên.", khoahoc: "Chuỗi thức ăn trong tự nhiên.", lsdia: "Thiên nhiên vùng Nam Bộ." },
        20: { week: "Tuần 20", tviet: "B18: Vệt phấn trên mặt bàn. Viết: Viết bài văn kể chuyện sáng tạo.", toan: "Phân số bằng nhau. Rút gọn phân số.", khoahoc: "Ôn tập chủ đề Thực vật và Động vật.", lsdia: "Dân cư và hoạt động sản xuất ở vùng Nam Bộ." },
        21: { week: "Tuần 21", tviet: "B19: Những ngày hè tươi đẹp. Luyện từ: Trạng ngữ.", toan: "Quy đồng mẫu số các phân số.", khoahoc: "Năng lượng và vai trò của năng lượng.", lsdia: "Địa đạo Củ Chi." },
        22: { week: "Tuần 22", tviet: "B20: Chuyện cổ tích về loài người. Viết: Đoạn văn tả ngoại hình nhân vật.", toan: "So sánh hai phân số cùng mẫu và khác mẫu số.", khoahoc: "Năng lượng điện và sử dụng điện an toàn.", lsdia: "Thành phố Hồ Chí Minh." },
        23: { week: "Tuần 23", tviet: "B21: Bè xuôi sông La. Luyện câu: Câu kể Ai là gì?", toan: "Luyện tập chung về phân số. Phép cộng phân số.", khoahoc: "Sử dụng năng lượng chất đốt.", lsdia: "Thiên nhiên vùng Nam Bộ (Tiếp)." },
        24: { week: "Tuần 24", tviet: "B22: Trống cơm. Viết: Viết đoạn văn tả hoạt động của nhân vật.", toan: "Phép trừ phân số. Giải toán có lời văn về phân số.", khoahoc: "Vật dẫn nhiệt và vật cách nhiệt.", lsdia: "Ôn tập vùng Nam Bộ." },
        25: { week: "Tuần 25", tviet: "B23: Luỹ tre. Luyện từ: Dấu gạch ngang.", toan: "Phép nhân phân số. Tính chất phép nhân phân số.", khoahoc: "Ôn tập chủ đề Năng lượng.", lsdia: "Tìm hiểu về Biển đảo Việt Nam." },
        26: { week: "Tuần 26", tviet: "B24: Sông núi nước Nam. Viết: Luyện tập viết bài văn kể chuyện.", toan: "Phép chia phân số. Tìm phân số của một số.", khoahoc: "Nấm và vai trò của nấm.", lsdia: "Quần đảo Hoàng Sa và Trường Sa." },
        27: { week: "Tuần 27", tviet: "Ôn tập và đánh giá giữa HK2.", toan: "Kiểm tra giữa HK2. Tìm số khi biết giá trị phân số.", khoahoc: "Đánh giá giữa HK2.", lsdia: "Bảo vệ chủ quyền biển đảo." },
        28: { week: "Tuần 28", tviet: "B25: Ai tài giỏi nhất. Luyện từ: Luyện tập về Trạng ngữ.", toan: "Diện tích hình bình hành, hình thoi.", khoahoc: "Vi khuẩn và tác hại của chúng.", lsdia: "Lễ hội dân gian Việt Nam." },
        29: { week: "Tuần 29", tviet: "B26: Con chuồn chuồn nước. Viết: Viết thư cho người thân.", toan: "Luyện tập hình học: Chu vi và diện tích các hình đã học.", khoahoc: "Phòng tránh một số bệnh do vi khuẩn gây ra.", lsdia: "Trang phục truyền thống." },
        30: { week: "Tuần 30", tviet: "B27: Chuyện cổ tích cây chuối. Luyện từ: Mở rộng vốn từ: Du lịch.", toan: "Ôn tập về số tự nhiên và các phép tính.", khoahoc: "Tìm hiểu sự đa dạng của nấm.", lsdia: "Tinh hoa ẩm thực Việt Nam." },
        31: { week: "Tuần 31", tviet: "B28: Cây gạo. Viết: Luyện tập viết thư.", toan: "Ôn tập phân số và các phép tính trên phân số.", khoahoc: "Ôn tập chủ đề Vi sinh vật.", lsdia: "Ngành nông nghiệp Việt Nam." },
        32: { week: "Tuần 32", tviet: "B29: Ngôi nhà của em. Nói và nghe: Trao đổi về một ước mơ.", toan: "Ôn tập hình học (tiếp). Một số bài toán về tỉ số.", khoahoc: "Thành tựu khoa học kỹ thuật.", lsdia: "Ngành công nghiệp Việt Nam." },
        33: { week: "Tuần 33", tviet: "Ôn tập cuối năm 1. Luyện tập đề kiểm tra.", toan: "Ôn tập nội dung đo lường, thống kê cuối năm.", khoahoc: "Ôn tập tổng kết cuối năm.", lsdia: "Giao thông vận tải và Du lịch." },
        34: { week: "Tuần 34", tviet: "Ôn tập cuối năm 2. Đánh giá kỹ năng.", toan: "Ôn tập tổng kết toàn bộ chương trình Toán 4.", khoahoc: "Ôn tập tổng hợp.", lsdia: "Ôn tập tổng kết." },
        35: { week: "Tuần 35", tviet: "Kiểm tra cuối năm.", toan: "Kiểm tra cuối năm.", khoahoc: "Tổng kết.", lsdia: "Tổng kết." },
    },

    bonusExercises: {
        "tiengviet": [
            { question: "Xác định danh từ trong câu: 'Mẹ mua cho em một chiếc cặp sách màu xanh rất đẹp.'", hint: "Từ chỉ người, vật...", answer: "Mẹ, em, chiếc, cặp sách." },
            { question: "Viết 1 câu có sử dụng biện pháp nhân hóa để tả về cây bút máy.", hint: "Coi cây bút như con người (biết nói, biết cười...)", answer: "Ví dụ: Chị bút máy mải mê nhảy múa trên trang giấy trắng.", image: "illustration_fountain_pen_1773746889551.png" },
            { question: "Tìm 2 động từ có chứa tiếng 'học'.", hint: "học tập, học bài...", answer: "học tập, học hỏi, học hành, học lỏm." },
            { question: "Phân biệt danh từ chung và danh từ riêng trong câu: 'Sông Hồng chảy qua thành phố Hà Nội.'", hint: "Sông là chung hay riêng?", answer: "Danh từ riêng: Sông Hồng, Hà Nội. Danh từ chung: thành phố." },
            { question: "Đặt câu hỏi cho bộ phận in đậm: 'Hôm nay, **chúng em đi tham quan Bảo tàng Lịch sử**.'", hint: "Làm gì?", answer: "Hôm nay, chúng em làm gì?" },
            { question: "Tìm trạng ngữ trong câu: 'Trong vườn, những bông hoa đua nhau khoe sắc.'", hint: "Chỉ nơi chốn", answer: "Trong vườn." },
            { question: "Viết 3 câu tả ngoại hình của một người bạn mà em yêu quý.", hint: "Dáng người, khuôn mặt, mái tóc...", answer: "Bé tự viết: Bạn em có dáng người cao ráo. Khuôn mặt bạn tròn trịa và rất tươi tắn. Mái tóc đen dài luôn được buộc gọn gàng." },
            { question: "Giải câu đố: 'Da trắng muốt, ruột trắng tinh, thân nằm đất, bụng chứa đầy kiến thức.' - Là cái gì?", hint: "Dùng để đọc", answer: "Cuốn sách." },
            { question: "Viết lại câu sau cho hay hơn bằng cách thêm tính từ: 'Con đường chạy vào bản.'", hint: "Con đường như thế nào?", answer: "Ví dụ: Con đường đất đỏ uốn lượn chạy vào bản nhỏ bình yên." },
            { question: "Tìm từ đồng nghĩa với từ 'chăm chỉ'.", hint: "Cần cù...", answer: "Cần cù, siêng năng, chịu khó." },
            { question: "Tìm chủ ngữ trong câu: 'Đàn hải âu tung cánh bay giữa bầu trời xanh.'", hint: "Cái gì tung cánh bay?", answer: "Đàn hải âu." },
            { question: "Đặt một câu khiến để nhờ bạn cho mượn cây thước.", hint: "Hãy cho tớ...", answer: "Cho mình mượn cây thước của bạn một lát nhé!" },
            { question: "Dấu gạch ngang trong câu: 'Tùng - lớp trưởng lớp 4A - là một học sinh gương mẫu.' có tác dụng gì?", hint: "Giải thích hay liệt kê?", answer: "Dùng để đánh dấu phần chú thích, giải thích thêm." },
            { question: "Thế nào là từ đa nghĩa?", hint: "Nhiều nghĩa có liên quan...", answer: "Là từ có một nghĩa gốc và một hay một số nghĩa chuyển, các nghĩa thường có mối liên hệ với nhau." },
            { question: "Tìm 3 từ láy tả tiếng mưa rơi.", hint: "Rì rầm, tí tách...", answer: "Tí tách, lộp độp, râm ran." },
            { question: "Đặt một câu có trạng ngữ chỉ thời gian.", hint: "Sáng nay, ...", answer: "Sáng nay, em dậy sớm để đi học." },
            { question: "Xác định vị ngữ trong câu: 'Mùa xuân, cây cối đâm chồi nảy lộc.'", hint: "Cây cối làm sao?", answer: "đâm chồi nảy lộc." },
            { question: "Tìm từ trái nghĩa với từ 'hòa bình'.", hint: "Chiến...", answer: "Chiến tranh." },
            { question: "Xác định các thành phần của câu: 'Sáng mai, bố em sẽ đi công tác.'", hint: "Trạng ngữ, chủ ngữ, vị ngữ", answer: "TN: Sáng mai; CN: bố em; VN: sẽ đi công tác." },
            { question: "Viết 1 câu sử dụng biện pháp so sánh tả về mặt trăng.", hint: "Mặt trăng tròn như...", answer: "Mặt trăng tròn vành vạnh như một chiếc đĩa bạc lơ lửng giữa trời." },
            { question: "Tìm 2 từ Hán Việt có chứa tiếng 'quốc'.", hint: "Quốc gia, ...", answer: "Quốc gia, quốc kỳ, quốc khánh, sơn hà xã tắc." },
            { question: "Đặt một câu cảm thán khen ngợi một bức tranh đẹp.", hint: "Ôi, ... thật ...!", answer: "Ôi, bức tranh này đẹp quá!" },
            { question: "Dấu hai chấm trong câu: 'Mẹ bảo tôi: - Con nhớ học bài nhé!' có tác dụng gì?", hint: "Báo hiệu lời nói...", answer: "Dùng để báo hiệu lời của nhân vật." },
            { question: "Tìm từ đồng nghĩa với 'anh dũng'.", hint: "Quả cảm, ...", answer: "Dũng cảm, quả cảm, gan dạ." },
            { question: "Xác định kiểu câu: 'Bạn có thích học toán không?'", hint: "Câu kể hay câu hỏi?", answer: "Câu hỏi." },
            { question: "Giải câu đố: 'Thân dài thượt, ruột thẳng băng, khi thịt bị xén, ruột lòi dần ra.' - Là cái gì?", hint: "Cái bút chì đã gọt", answer: "Cái bút chì." },
            { question: "Tìm động từ trong câu: 'Con suối róc rách chảy qua khe đá.'", hint: "Từ chỉ hành động", answer: "chảy." },
            { question: "Viết 1 câu miêu tả âm thanh của gió.", hint: "Gió thổi...", answer: "Tiếng gió thổi vi vu qua những tán lá tre." },
            { question: "Tìm 3 tính từ tả tính cách con người.", hint: "Hiền lành, ...", answer: "Hiền lành, trung thực, dũng cảm, khiêm tốn." },
            { question: "Xác định chủ ngữ trong câu: 'Mẹ tôi là giáo viên.'", hint: "Ai là giáo viên?", answer: "Mẹ tôi." },
            { question: "Đặt một câu kể có sử dụng dấu gạch ngang.", hint: "Dùng để liệt kê hoặc chú thích", answer: "Em thích ăn nhiều loại quả: táo - cam - xoài." },
            { question: "Tìm từ đồng nghĩa với 'quê hương'.", hint: "Quê nha, ...", answer: "Quê nhà, xứ sở, giang sơn." },
            { question: "Dấu ngoặc kép trong câu: 'Nam được mệnh danh là 'cây toán' của lớp.' dùng để làm gì?", hint: "Nhấn mạnh tên gọi đặc biệt", answer: "Dùng để đánh dấu từ ngữ có ý nghĩa đặc biệt." },
            { question: "Tìm 2 từ chỉ đồ dùng học tập hiện đại.", hint: "Máy tính, ...", answer: "Máy tính cầm tay, máy chiếu, bảng tương tác." },
            { question: "Tìm trạng ngữ trong câu: 'Để học tốt, em cần chăm chỉ nghe giảng.'", hint: "Chỉ mục đích", answer: "Để học tốt." },
            { question: "Biện pháp so sánh trong câu: 'Tiếng suối trong như tiếng hát xa.' là gì?", hint: "Vật A như vật B", answer: "So sánh tiếng suối với tiếng hát." },
            { question: "Đặt một câu kể kiểu 'Ai là gì?'", hint: "Em là...", answer: "Em là học sinh lớp 4A." },
            { question: "Xác định từ loại của từ 'vui vẻ'.", hint: "Danh, động hay tính từ?", answer: "Tính từ." },
            { question: "Tìm từ trái nghĩa với 'yếu đuối'.", hint: "Mạnh...", answer: "Mạnh mẽ." },
            { question: "Dấu gạch ngang trong câu: 'Danh từ - từ chỉ người, vật...' có tác dụng gì?", hint: "Định nghĩa, giải thích", answer: "Dùng để đánh dấu phần giải thích." },
            { question: "Viết đoạn văn ngắn (3 câu) tả về bình minh.", hint: "Mặt trời, nắng...", answer: "Mặt trời từ từ nhô lên sau lũy tre làng. Những tia nắng vàng dịu dàng chiếu xuống mặt đất. Cả không gian bừng sáng và tràn đầy sức sống." },
            { question: "Tìm chủ ngữ trong câu: 'Những đóa hoa cúc vàng rực rỡ tỏa hương dưới nắng.'", hint: "Cái gì tỏa hương?", answer: "Những đóa hoa cúc vàng rực rỡ." },
            { question: "Đặt câu có sử dụng từ 'đoàn kết'.", hint: "Chúng em...", answer: "Lớp em luôn đoàn kết để cùng nhau tiến bộ." },
            { question: "Tìm 3 động từ tả hoạt động trong giờ thể dục.", hint: "Chạy, ...", answer: "Chạy bộ, nhảy dây, đá cầu, tập võ." },
            { question: "Thế nào là từ đồng âm?", hint: "Phát âm giống, nghĩa khác...", answer: "Là những từ giống nhau về âm nhưng khác hẳn nhau về nghĩa." },
            { question: "Xác định các thành phần của câu: 'Trong bếp, mẹ đang nấu cơm.'", hint: "Trạng ngữ, chủ ngữ, vị ngữ", answer: "TN: Trong bếp; CN: mẹ; VN: đang nấu cơm." },
            { question: "Tìm 2 tính từ tả hình dáng của một ngôi nhà.", hint: "Cao, rộng...", answer: "Cao ráo, rộng rãi, trang nghiêm, cổ kính." },
            { question: "Đặt 1 câu cảm thán khi nhận được món quà bất ngờ.", hint: "Ôi, ... quá!", answer: "Ôi, món quà này tuyệt vời quá!" },
            { question: "Tìm 3 danh từ chỉ các loài chim.", hint: "Sáo, vẹt...", answer: "Chim sẻ, chim bồ câu, chim đại bàng." },
            { question: "Viết 1 câu miêu tả màu sắc của lá cây vào mùa thu.", hint: "Lá cây màu gì?", answer: "Những chiếc lá phong chuyển sang màu đỏ rực rỡ dưới nắng thu." },
            { question: "Tìm từ trái nghĩa với từ 'nhân hậu'.", hint: "Độc ác, ...", answer: "Độc ác, tàn nhẫn, hung dữ." },
            { question: "Xác định từ loại của từ 'chạy'.", hint: "Danh, động hay tính từ?", answer: "Động từ." },
            { question: "Đặt câu kiểu 'Ai làm gì?' về hoạt động của bác nông dân.", hint: "Bác nông dân...", answer: "Bác nông dân đang cày ruộng trên đồng." },
            { question: "Tìm trạng ngữ trong câu: 'Vì mải chơi, Nam quên học bài.'", hint: "Chỉ nguyên nhân", answer: "Vì mải chơi." },
            { question: "Giải câu đố: 'Cây gì da trắng hồng hào, khi trẻ thì thấp lúc cao thì gầy, ruột đen như mực cầm tay vẽ hình.'", hint: "Bút chì", answer: "Bút chì." },
            { question: "Tìm từ trái nghĩa với 'kiên trì'.", hint: "Nản chí, ...", answer: "Nản chí, bỏ cuộc, lười biếng." },
            { question: "Xác định vị ngữ trong câu: 'Mặt trời tỏa nắng vàng rực rỡ.'", hint: "Làm gì?", answer: "tỏa nắng vàng rực rỡ." },
            { question: "Tìm 2 danh từ chỉ các hiện tượng tự nhiên.", hint: "Mưa, ...", answer: "Mưa, gió, sấm chớp, bão." },
            { question: "Đặt một câu kể có trạng ngữ chỉ mục đích.", hint: "Để ..., em ...", answer: "Để đạt điểm cao, em luôn chăm chỉ học bài." },
            { question: "Tìm 3 động từ liên quan đến việc bảo vệ môi trường.", hint: "Trồng cây, ...", answer: "Trồng cây, dọn rác, tiết kiệm (nước/điện)." },
            { question: "Dấu ngoặc đơn trong câu: 'Thành phố Hồ Chí Minh (tên cũ là Sài Gòn)...' có tác dụng gì?", hint: "Chú thích, giải thích", answer: "Dùng để đánh dấu phần chú thích, giải thích thêm." },
            { question: "Tìm từ đồng nghĩa với từ 'dũng cảm'.", hint: "Gan dạ, ...", answer: "Gan dạ, quả cảm, anh dũng." },
            { question: "Xác định chủ ngữ trong câu: 'Những đóa hoa sen tỏa hương thơm ngát.'", hint: "Cái gì tỏa hương?", answer: "Những đóa hoa sen." },
            { question: "Viết 1 câu miêu tả mái tóc của mẹ em.", hint: "Mái tóc thế nào?", answer: "Mái tóc của mẹ em đen mượt và dài quá lưng." },
            { question: "Tìm 2 từ Hán Việt có chứa tiếng 'tâm'.", hint: "Tâm hồn, ...", answer: "Tâm hồn, trọng tâm, tâm địa, tận tâm." }
        ],
        "toan": [
            { question: "Tính: 125.400 + 34.600 = ?", hint: "Cộng hàng triệu, hàng nghìn...", answer: "160.000" },
            { question: "Số lớn nhất có 6 chữ số là số nào?", hint: "Sáu chữ số 9", answer: "999.999" },
            { question: "Biểu thức 25 + a với a = 15 có giá trị là bao nhiêu?", hint: "Thay a bằng 15", answer: "40" },
            { question: "Góc có số đo 90 độ gọi là góc gì?", hint: "Góc nhọn, vuông hay tù?", answer: "Góc vuông" },
            { question: "2 tấn 5 yến bằng bao nhiêu kg?", hint: "1 tấn = 1000kg, 1 yến = 10kg", answer: "2050 kg" },
            { question: "Tìm trung bình cộng của: 20, 30, 40.", hint: "(20+30+40)/3", answer: "30" },
            { question: "Tính: 2/5 + 1/5 = ?", hint: "Cộng tử số", answer: "3/5" },
            { question: "Rút gọn phân số 15/20.", hint: "Chia cả tử và mẫu cho 5", answer: "3/4" },
            { question: "Một hình bình hành có đáy 10cm, chiều cao 5cm. Diện tích là?", hint: "S = đáy x cao", answer: "50 cm²" },
            { question: "Trong các số: 125, 430, 672. Số nào chia hết cho 2?", hint: "Tận cùng là 0, 2, 4, 6, 8", answer: "430, 672" },
            { question: "Tìm x: x - 1200 = 5000", hint: "x = 5000 + 1200", answer: "6200" },
            { question: "1/2 của 100 là bao nhiêu?", hint: "100 / 2", answer: "50" },
            { question: "Một thế kỷ có bao nhiêu năm?", hint: "100 hay 1000?", answer: "100 năm" },
            { question: "Viết phân số chỉ phần đã tô màu của hình tròn chia làm 4 phần, tô 3 phần.", hint: "3 trên 4", answer: "3/4" },
            { question: "Tính diện tích hình thoi có độ dài hai đường chéo là 8cm và 10cm.", hint: "S = (d1 x d2) / 2", answer: "40 cm²" },
            { question: "Tìm x: x * 15 = 450", hint: "x = 450 / 15", answer: "30" },
            { question: "So sánh hai phân số: 3/4 và 5/6.", hint: "Quy đồng mẫu số thành 12", answer: "3/4 < 5/6 (vì 9/12 < 10/12)" },
            { question: "Một cửa hàng có 1 tấn gạo, đã bán được 3/5 số gạo đó. Hỏi còn lại bao nhiêu kg?", hint: "1 tấn = 1000kg. Còn lại 2/5", answer: "400 kg" },
            { question: "Năm 2026 thuộc thế kỷ thứ mấy?", hint: "Thế kỷ ...", answer: "Thế kỷ 21 (XXI)" },
            { question: "Tính nhanh: 25 x 4 x 12 = ?", hint: "25 x 4 = 100", answer: "1200" },
            { question: "Tìm x: x / 5 = 120", hint: "x = 120 * 5", answer: "600" },
            { question: "Một hình chữ nhật có chiều dài 12cm, chiều rộng bằng 1/2 chiều dài. Diện tích là?", hint: "Tính rộng trước", answer: "72 cm² (Rộng 6cm)" },
            { question: "Cộng hai phân số: 1/2 + 1/3 = ?", hint: "Quy đồng mẫu số thành 6", answer: "5/6" },
            { question: "Đổi: 3 ngày 5 giờ = ... giờ", hint: "1 ngày = 24h", answer: "77 giờ" },
            { question: "Tính: (250 + 150) x 2 = ?", hint: "Trong ngoặc trước", answer: "800" },
            { question: "Một vòi nước chảy vào bể mỗi phút được 20 lít. Hỏi sau 1 giờ vòi đó chảy được bao nhiêu lít?", hint: "1 giờ = 60 phút", answer: "1200 lít" },
            { question: "Tìm x: x + 2/3 = 1", hint: "x = 1 - 2/3", answer: "1/3" },
            { question: "Một hình vuông có chu vi là 40cm. Diện tích của nó là bao nhiêu?", hint: "Tính cạnh trước", answer: "100 cm² (Cạnh 10cm)" },
            { question: "Số nào chia hết cho cả 2, 5 và 3 trong các số sau: 120, 150, 200?", hint: "Tận cùng là 0, tổng chữ số chia hết cho 3", answer: "120, 150" },
            { question: "Trung bình cộng của 4 số là 25. Tổng của 4 số đó là?", hint: "25 x 4", answer: "100" },
            { question: "Tính: 3/4 - 1/8 = ?", hint: "Quy đồng mẫu số thành 8", answer: "5/8" },
            { question: "Một lớp có 30 học sinh, số học sinh nữ chiếm 2/3. Hỏi có bao nhiêu học sinh nam?", hint: "Tính nữ trước rồi lấy 30 trừ đi", answer: "10 học sinh nam (20 nữ)" },
            { question: "Đổi: 5dm² 3cm² = ... cm²", hint: "1dm² = 100cm²", answer: "503 cm²" },
            { question: "Tìm phân số lớn hơn: 7/9 hay 7/11?", hint: "Cùng tử, mẫu nhỏ hơn thì lớn hơn", answer: "7/9" },
            { question: "Tính nhanh: 125 x 7 x 8 = ?", hint: "125 x 8 = 1000", answer: "7000" },
            { question: "Một hình thoi có diện tích 50cm², một đường chéo dài 10cm. Đường chéo kia dài?", hint: "d2 = (S x 2) / d1", answer: "10 cm" },
            { question: "Tìm số trung bình cộng của: 12, 14, 16.", hint: "(12+14+16)/3", answer: "14" },
            { question: "Tính: 5/6 - 1/3 = ?", hint: "1/3 = 2/6", answer: "3/6 = 1/2" },
            { question: "Một xe ô tô đi được 120km trong 2 giờ. Vận tốc của xe là?", hint: "v = s / t", answer: "60 km/h" },
            { question: "Số nhỏ nhất có 5 chữ số khác nhau là?", hint: "10234", answer: "10234" },
            { question: "Tính: 1/4 + 1/8 + 1/2 = ?", hint: "Mẫu số chung là 8", answer: "7/8" },
            { question: "Một hình bình hành có diện tích 100cm², đáy 20cm. Chiều cao là?", hint: "h = S / a", answer: "5 cm" },
            { question: "Tìm x: x x 12 = 144", hint: "x = 144 / 12", answer: "12" },
            { question: "2 giờ 15 phút = ... phút", hint: "2 x 60 + 15", answer: "135 phút" },
            { question: "3/5 của 500 là bao nhiêu?", hint: "500 / 5 x 3", answer: "300" },
            { question: "Số 4567 tròn chục là số nào?", hint: "Hàng đơn vị thành 0", answer: "4570" },
            { question: "Tính: 34 + 56 = ?", hint: "Cộng có nhớ", answer: "90" },
            { question: "Một tháng thường có bao nhiêu tuần?", hint: "4 hay 8?", answer: "4 tuần" },
            { question: "Số lớn nhất có 3 chữ số khác nhau là số nào?", hint: "9, 8, 7", answer: "987" },
            { question: "Tính: 45 - 19 = ?", hint: "Trừ có nhớ", answer: "26" },
            { question: "Hình chữ nhật có mấy góc vuông?", hint: "Đếm số góc", answer: "4 góc vuông" },
            { question: "Tính: 2 x 7 + 20 = ?", hint: "Nhân trước", answer: "34" },
            { question: "Mẹ mua 2 chục quả trứng, biếu bà 8 quả. Còn lại bao nhiêu quả?", hint: "2 chục = 20", answer: "12 quả" },
            { question: "Đồng hồ chỉ 12 giờ trưa, 2 tiếng sau là mấy giờ?", hint: "12 + 2", answer: "2 giờ chiều (14 giờ)" },
            { question: "Tính: 50 : 5 - 3 = ?", hint: "Chia trước", answer: "7" },
            { question: "Tìm x: x - 25 = 40", hint: "x = 40 + 25", answer: "65" },
            { question: "Một đoạn thẳng dài 1dm, vẽ thêm 5cm. Tổng cộng dài bao nhiêu cm?", hint: "1dm = 10cm", answer: "15cm" },
            { question: "Tìm x: x + 450 = 1000", hint: "x = 1000 - 450", answer: "550" },
            { question: "Diện tích hình chữ nhật có dài 8cm, rộng 5cm là?", hint: "8 x 5", answer: "40 cm²" },
            { question: "Tính: 3/10 + 2/10 + 5/10 = ?", hint: "Cộng tử số", answer: "10/10 = 1" },
            { question: "Số nào lớn nhất trong các số: 4567, 4657, 4576?", hint: "So sánh hàng trăm", answer: "4657" },
            { question: "Một hình vuông có cạnh 5cm. Chu vi là bao nhiêu?", hint: "5 x 4", answer: "20cm" },
            { question: "Tính: 1000 - 250 x 2 = ?", hint: "Nhân trước", answer: "500" },
            { question: "Đổi: 2 thế kỷ = ... năm", hint: "1 thế kỷ = 100 năm", answer: "200 năm" },
            { question: "Tìm x: x : 4 = 25", hint: "x = 25 x 4", answer: "100" },
            { question: "Trong biểu thức (10 + 5) x 3, tính cái gì trước?", hint: "Ngoặc hay nhân?", answer: "Trong ngoặc (10 + 5)" },
            { question: "Một tuần có 7 ngày, hỏi 5 tuần có bao nhiêu ngày?", hint: "7 x 5", answer: "35 ngày" },
            { question: "Tính: 1/2 + 1/4 = ?", hint: "Mẫu chung là 4", answer: "3/4" },
            { question: "Tìm số trung bình cộng của: 10, 20, 30, 40.", hint: "Tổng chia 4", answer: "25" },
            { question: "Một thế kỷ có bao nhiêu năm?", hint: "10 hay 100?", answer: "100 năm" },
            { question: "Tìm x: x * 10 = 500", hint: "x = 500 / 10", answer: "50" },
            { question: "Diện tích hình thoi có đường chéo 6cm và 8cm.", hint: "(6x8)/2", answer: "24 cm²" },
            { question: "Số nào chia hết cho 5: 123, 450, 678?", hint: "Tận cùng 0 hoặc 5", answer: "450" },
            { question: "Tính nhanh: 25 x 12 = ?", hint: "25 x 4 x 3", answer: "300" },
            { question: "Một hình vuông có chu vi 16cm. Diện tích là?", hint: "Cạnh 4cm", answer: "16 cm²" },
            { question: "Tìm x: x - 1/2 = 1/2", hint: "x = 1/2 + 1/2", answer: "1" },
            { question: "Trong số 1.234.567, chữ số 2 thuộc hàng nào?", hint: "Hàng trăm nghìn...", answer: "Hàng trăm nghìn" }
        ],
        "khoahoc": [
            { question: "Nước tồn tại ở những thể nào?", hint: "Lỏng, rắn, ...", answer: "Lỏng, Rắn, Khí (Hơi)." },
            { question: "Tại sao không khí lại quan trọng với sinh vật?", hint: "Cần để làm gì?", answer: "Cung cấp oxy để sinh vật thực hiện quá trình hô hấp và duy trì sự sống." },
            { question: "Kể tên các nhóm chất dinh dưỡng chính trong thức ăn.", hint: "Đạm, béo...", answer: "Chất bột đường, chất đạm, chất béo, vitamin và khoáng chất." },
            { question: "Thế nào là chuỗi thức ăn?", hint: "Cây -> Sâu -> ...", answer: "Là mối quan hệ về thức ăn giữa các loài sinh vật, loài này ăn loài kia để tồn tại." },
            { question: "Tại sao chúng ta cần ăn nhiều rau xanh và hoa quả?", hint: "Cung cấp chất gì?", answer: "Vì chúng cung cấp nhiều vitamin, khoáng chất và chất xơ giúp cơ thể khỏe mạnh, chống bệnh tật." },
            { question: "Nêu 3 cách để tiết kiệm điện trong gia đình em.", hint: "Tắt đèn khi ra ngoài...", answer: "Tắt các thiết bị điện khi không sử dụng, dùng bóng đèn tiết kiệm điện, hạn chế mở tủ lạnh quá lâu." },
            { question: "Âm thanh có thể truyền qua những môi trường nào?", hint: "Rắn, lỏng, khí...", answer: "Âm thanh truyền được qua môi trường rắn, lỏng và khí." },
            { question: "Nêu tác dụng của ánh sáng mặt trời đối với thực vật.", hint: "Để quang hợp...", answer: "Giúp cây quang hợp, tạo chất dinh dưỡng để sống và phát triển." }
        ],
        "lsdia": [
            { question: "Ai là người dời đô về Thăng Long năm 1010?", hint: "Lý Thái ...", answer: "Lý Thái Tổ (Lý Công Uẩn)." },
            { question: "Vì sao vùng Nam Bộ lại phát triển nông nghiệp mạnh nhất cả nước?", hint: "Đất đai, sông ngòi...", answer: "Nhờ đất phù sa màu mỡ và hệ thống sông ngòi, kênh rạch chằng chịt, khí hậu nóng ẩm." },
            { question: "Di tích Văn Miếu - Quốc Tử Giám thờ ai và dùng để làm gì?", hint: "Khổng Tử, trường học...", answer: "Thờ Khổng Tử và các bậc hiền triết, là trường đại học đầu tiên của Việt Nam." },
            { question: "Chiến dịch Điện Biên Phủ kết thúc thắng lợi vào ngày tháng năm nào?", hint: "7/5/...", answer: "7 tháng 5 năm 1954." },
            { question: "Thành phố nào là trung tâm kinh tế, văn hóa lớn nhất miền Nam Việt Nam?", hint: "Thành phố mang tên Bác", answer: "Thành phố Hồ Chí Minh." },
            { question: "Người anh hùng nào đã cưỡi voi đánh giặc Đông Hán?", hint: "Hai chị...", answer: "Hai Bà Trưng." },
            { question: "Kể tên 3 tỉnh thuộc vùng Tây Nguyên.", hint: "Gia Lai, Kon Tum...", answer: "Gia Lai, Kon Tum, Đắk Lắk, Lâm Đồng, Đắk Nông." },
            { question: "Quần đảo Hoàng Sa và Trường Sa thuộc chủ quyền của nước nào?", hint: "Việt...", answer: "Việt Nam." }
        ],
        "english": [
            { question: "Translate to Vietnamese: 'My school is very big and beautiful.'", hint: "Trường của tôi...", answer: "Trường của tôi rất lớn và đẹp." },
            { question: "What is your favorite subject?", hint: "I like...", answer: "I like Math/English/Vietnamese..." },
            { question: "When is your birthday?", hint: "It is in...", answer: "Example: It is in October." },
            { question: "Name 5 colors in English.", hint: "Red, blue...", answer: "Red, blue, green, yellow, pink, orange, black, white..." },
            { question: "Translate to English: 'Chào buổi sáng, thưa cô.'", hint: "G... m..., T...", answer: "Good morning, teacher." },
            { question: "What do you do at break time?", hint: "I play...", answer: "I play hide and seek / I chat with my friends / I read books." }
        ],
        "daoduc": [
            { question: "Tại sao cần phải hiếu thảo với cha mẹ?", hint: "Công sinh thành...", answer: "Vì cha mẹ là người có công sinh thành và nuôi dưỡng chúng ta lớn khôn." },
            { question: "Khi mắc lỗi, em nên làm gì?", hint: "Xin lỗi...", answer: "Dũng cảm nhận lỗi và nói lời xin lỗi chân thành." },
            { question: "Em làm gì để thể hiện lòng biết ơn thầy cô giáo?", hint: "Học tập, lời chào...", answer: "Chăm chỉ học tập, lễ phép và tặng hoa/điểm 10 cho thầy cô." },
            { question: "Tôn trọng tài sản của người khác thể hiện điều gì?", hint: "Người lịch sự...", answer: "Thể hiện mình là người văn minh, lịch sự và biết tôn trọng mọi người." }
        ],
        "tinhoc": [
            { question: "Phần mềm nào giúp em soạn thảo văn bản?", hint: "Word hay Paint?", answer: "Microsoft Word." },
            { question: "Để gõ chữ hoa 'A', em nhấn tổ kết hợp phím nào?", hint: "Shift + ...", answer: "Shift + A." },
            { question: "Thiết bị nào dùng để nhập dữ liệu vào máy tính?", hint: "Bàn phím, chuột...", answer: "Bàn phím, chuột (Thiết bị vào)." },
            { question: "Internet dùng để làm gì?", hint: "Tìm thông tin, học...", answer: "Tìm kiếm thông tin, giải trí, học tập và kết nối mọi người." }
        ],
        "congnghe": [
            { question: "Kể tên 3 loài hoa thường trồng trong chậu.", hint: "Hoa mười giờ, ...", answer: "Hoa hồng, hoa cúc, hoa mười giờ, hoa lan." },
            { question: "Tại sao cần phải tưới nước cho cây cảnh?", hint: "Để cây ...", answer: "Để cây có nước để sống và phát triển xanh tốt." },
            { question: "Dụng cụ nào dùng để xới đất khi trồng cây?", hint: "Xẻng nhỏ...", answer: "Xẻng nhỏ (bay), cào đất." }
        ]
    },
};

// ============================================================
// DỮ LIỆU PHẦN THƯỞNG & LỜI KHUYÊN
// ============================================================
const REWARDS = [
    { id: 1, stars: 10, emoji: "🌟", name: "Ngôi sao Chăm ngoan", desc: "Em học hành rất đều đặn!" },
    { id: 2, stars: 20, emoji: "🏆", name: "Cúp Kiến thức", desc: "Tuyệt vời! Em nắm bài rất chắc!" },
    { id: 3, stars: 30, emoji: "🦋", name: "Bươm bướm Sáng tạo", desc: "Cách em học thật thú vị!" },
    { id: 4, stars: 40, emoji: "🎀", name: "Nơ hồng Danh dự", desc: "Bác rất tự hào về tinh thần của em!" },
    { id: 5, stars: 50, emoji: "🌈", name: "Cầu vồng Ước mơ", desc: "Cố gắng lên, ước mơ sẽ thành hiện thực!" },
    { id: 6, stars: 65, emoji: "🦄", name: "Kỳ lân Thông thái", desc: "Em giỏi như những học giả thực thụ!" },
    { id: 7, stars: 80, emoji: "🎪", name: "Vé xem xiếc đặc biệt", desc: "Phần thưởng đi xem xiếc cùng Bác!" },
    { id: 8, stars: 100, emoji: "🍦", name: "Đại tiệc Kem ý", desc: "Một bữa kem thật ngon để chúc mừng!" },
    { id: 9, stars: 125, emoji: "🎠", name: "Chuyến dã ngoại cuối tuần", desc: "Được đi chơi xa thư giãn nhé!" },
    { id: 10, stars: 150, emoji: "🌺", name: "Đại chiến thắng", desc: "Phần quà to nhất từ Bác dành tặng em!" },
];

const PRAISES = [
    "⭐ Tuyệt vời! Em thật chăm chỉ!",
    "🌟 Giỏi lắm! Bác rất tự hào về em!",
    "🎉 Hoàn thành xuất sắc! Em xứng đáng được thưởng!",
    "💪 Em thật dũng cảm vì đã cố gắng học bài khó!",
    "🌈 Bài làm của em thật tuyệt! Tiếp tục phát huy nhé!",
    "🦋 Em học bài nhanh như bướm xinh bay cao!",
    "🏆 Vô địch! Em là cô bé học giỏi nhất trong mắt Bác!",
    "🎀 Đáng yêu và chăm chỉ - em là niềm tự hào của cả nhà!",
    "✨ Mỗi ngày em đều tiến bộ hơn một chút, thật tốt!",
    "🌸 Bác thương em rất nhiều vì em luôn tự giác chịu học!",
];

const QUOTES = [
    "Mỗi ngày học một chút, sau này sẽ giỏi lắm đó!",
    "Bác tin {name} sẽ là một học sinh xuất sắc!",
    "Học không chỉ là kiến thức, mà còn là rèn luyện tính kiên trì.",
    "Bé {name} ngoan và giỏi - Cả nhà đều yêu em!",
    "Ngôi sao nhỏ hôm nay, thành công lớn mai sau!",
    "Đừng sợ bài khó, hãy chia nhỏ nó ra để làm nhé.",
    "Học chăm chỉ rồi cuối tuần Bác cho đi chơi xiếc nha!",
    "Kiến thức là kho báu mà không ai lấy mất được của em.",
    "Hãy luôn tò mò và đặt câu hỏi về thế giới quanh em.",
    "Bác tự hào khi thấy {name} tự giác học bài mỗi ngày.",
    "Sách là người bạn tốt nhất, nó mở ra cả thế giới.",
    "Học giỏi để mai sau giúp đỡ bố mẹ và mọi người nhé.",
];

// ============================================================
// DỮ LIỆU CỬA HÀNG ĐỒ ẢO (SHOP)
// ============================================================
const SHOP_ITEMS = [
    { id: 'sticker_star', name: 'Huy hiệu Sao Sáng', emoji: '⭐', price: 2, desc: 'Chứng nhận em đã rất cố gắng!' },
    { id: 'sticker_heart', name: 'Huy hiệu Trái Tim', emoji: '💖', price: 2, desc: 'Phần thưởng cho sự chăm chỉ.' },
    { id: 'sticker_rainbow', name: 'Huy hiệu Cầu vồng', emoji: '🌈', price: 5, desc: 'Làm rạng rỡ bảng thành tích.' },
    { id: 'toy_balloon', name: 'Bóng bay trái tim', emoji: '🎈', price: 3, desc: 'Lan tỏa yêu thương khắp nơi.' },
    { id: 'toy_robot', name: 'Robot Mini', emoji: '🤖', price: 10, desc: 'Người bạn nhỏ thông minh.' },
    { id: 'toy_camera', name: 'Máy Ảnh Đồ Chơi', emoji: '📷', price: 8, desc: 'Lưu giữ những khoảnh khắc vui.' },
    { id: 'pet_cat', name: 'Mèo máy Luna', emoji: '🐱‍🚀', price: 20, desc: 'Người bạn đồng hành thông thái.' },
    { id: 'item_tent', name: 'Lều Cắm Trại', emoji: '⛺', price: 15, desc: 'Cho những chuyến phiêu lưu giả tưởng.' },
    { id: 'item_hat', name: 'Mũ Phù Thủy', emoji: '🧙', price: 12, desc: 'Biến hình trong nháy mắt.' },
    { id: 'item_wand', name: 'Gậy Phép Thuật', emoji: '🪄', price: 15, desc: 'Tạo ra những điều kỳ diệu.' },
    { id: 'pet_dragon', name: 'Rồng con lửa', emoji: '🐲', price: 35, desc: 'Mạnh mẽ và đầy nhiệt huyết.' },
    { id: 'item_ufo', name: 'Đĩa Bay Bí Ẩn', emoji: '🛸', price: 40, desc: 'Phương tiện bay đến các vì sao.' },
    { id: 'house_castle', name: 'Lâu đài cổ tích', emoji: '🏰', price: 50, desc: 'Phần thưởng lớn nhất cho bé xuất sắc.' }
];

// ============================================================
// THƯ VIỆN ÂM THANH (AUDIO)
// ============================================================
const AUDIO_LIBRARY = {
    music: [
        // --- NHÓM MOZART & VIVALDI (KÍCH THÍCH TRÍ THÔNG MINH) ---
        { id: 'classic_1', name: 'Mozart - Giao hưởng số 40 (Molto Allegro)', url: 'https://archive.org/download/lp_symphony-no-40-in-g-minor_wolfgang-amadeus-mozart-the-salzburg-festi/Molto%20Allegro.mp3', desc: 'Giúp kích thích tư duy logic và sự nhanh nhạy của não bộ.' },
        { id: 'classic_2', name: 'Vivaldi - Mùa Xuân (Spring - Allegro)', url: 'https://archive.org/download/TheFourSeasonsVivaldi/SpringMvt1Allegro.mp3', desc: 'Giai điệu tươi vui, khơi dậy niềm hào hứng khi bắt đầu học bài.' },
        { id: 'classic_3', name: 'Mozart - Eine kleine Nachtmusik (Allegro)', url: 'https://archive.org/download/mozartserenadeeinekleinenachtmusik_k_525/01.I.Allegro.mp3', desc: 'Nhạc "Một bản nhạc đêm ngắn" giúp tinh thần thoải mái, minh mẫn.' },

        // --- NHÓM BACH (RÈN LUYỆN TƯ DUY TOÁN HỌC & ĐỘC LẬP) ---
        { id: 'bach_1', name: 'Bach - Goldberg Variations (Aria)', url: 'https://archive.org/download/01.TwinkleTwinkleLittleStar/01.%20Twinkle%20Twinkle%20Little%20Star.mp3', desc: 'Cấu trúc nhạc của Bach cực tốt cho việc rèn luyện sự kiên trì.' }, // Backup link if needed
        { id: 'bach_2', name: 'Bach - Brandenburg Concerto No.3', url: 'https://archive.org/download/bach-brandenburg-concerto-no-1/Bach_%20Brandenburg%20Concerto%20%E2%84%963.mp3', desc: 'Nhịp điệu đều đặn giúp não bộ đạt trạng thái tập trung cao độ.' },

        // --- NHÓM RÈN LUYỆN SỰ TẬP TRUNG & GHI NHỚ ---
        { id: 'pachelbel_1', name: 'Pachelbel - Canon in D', url: 'https://archive.org/download/canon-in-d-pachelbel/Canon%20In%20D%20Major.mp3', desc: 'Giai điệu lặp đi lặp lại một cách tinh tế giúp củng cố trí nhớ.' },
        { id: 'beethoven_1', name: 'Beethoven - Ánh Trăng (Moonlight First)', url: 'https://archive.org/download/lp_symphony-no-40-in-g-minor_wolfgang-amadeus-mozart-the-salzburg-festi/Andante.mp3', desc: 'Dịu dàng và trầm lắng, giúp bé bình tĩnh khi gặp bài toán khó.' },

        // --- NHÓM NHẠC SÁNG TẠO & CẢM XÚC (CHOPIN, DEBUSSY, SATIE) ---
        { id: 'chopin_1', name: 'Chopin - Nocturne Op.9 No.2', url: 'https://archive.org/download/FredericChopinNocturneNo.2InEFlatMajorOp.9No.2FromBlueLagoon/NocturneNo.2InEFlatMajorOp.9No.2.mp3', desc: 'Giai điệu êm ái, khơi gợi trí tưởng tượng phong phú.' },
        { id: 'debussy_1', name: 'Debussy - Clair de Lune', url: 'https://archive.org/download/ClaudeDebussyClairDeLuneFromTwilight/ClairDeLune_64kb.mp3', desc: 'Âm thanh lung linh của ánh trăng giúp bé thư giãn sau giờ học.' },
        { id: 'satie_1', name: 'Erik Satie - Gymnopédie No.1', url: 'https://archive.org/download/GymnopedieNo.1/GymnopedieNo1.mp3', desc: 'Bản nhạc "Siêu tập trung" giúp bé không còn xao nhãng.' },

        // --- NHÓM ÂM THANH THIÊN NHIÊN (LỌC TIẾNG ỒN XUNG QUANH) ---
        { id: 'nature_1', name: 'Sóng Biển Thái Bình Dương (Live)', url: 'https://archive.org/download/CrashingOceanWaves3HoursToRelaxSleepOrMeditate/Crashing_Ocean_Waves.mp3', desc: 'Tiếng sóng rì rào giúp bé cảm thấy thoải mái như đang ở biển.' },
        { id: 'nature_2', name: 'Tiếng Chim Rừng & Suối Reo', url: 'https://archive.org/download/nature_sounds_202103/Birds%20Singing%20in%20the%20Forest.mp3', desc: 'Âm thanh tươi mát giúp không gian học tập sống động hơn.' },
        { id: 'nature_3', name: 'Tiếng Mưa Rơi Trên Mái Tôn', url: 'https://archive.org/download/soft-rain-ambient/soft-rain-ambient.mp3', desc: 'Tiếng ồn trắng tốt nhất giúp bé loại bỏ tiếng tivi hay xe cộ.' },

        // --- NHÓM LOFI & PIANO HIỆN ĐẠI ---
        { id: 'piano_1', name: 'Piano Thư Giãn Học Bài', url: 'https://archive.org/download/relaxing-piano-music-for-studying/Relaxing%20Piano%20Music%20for%20Studying.mp3', desc: 'Piano không lời giúp ổn định nhịp tim và tập trung tốt hơn.' },
        { id: 'lofi_1', name: 'Lofi Chill Học Tập (Radio)', url: 'https://archive.org/download/lofi-hip-hop-radio-beats-to-relax-study-to/lofi%20hip%20hop%20radio%20-%20beats%20to%20relax-study%20to.mp3', desc: 'Nhịp điệu đều đặn 60 nhịp/phút, cực kỳ phù hợp cho việc học.' }
    ],
    stories: [
        { id: 'story_1', name: 'Sự Tích Dưa Hấu', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/001.SuTichDuaHau_KhoTangTruyenCoTichVietNam.mp3', desc: 'Câu chuyện về Mai An Tiêm và nguồn gốc quả dưa hấu.' },
        { id: 'story_2', name: 'Sự Tích Trầu Cau', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/002.SuTichTrauCauVaVoi_KhoTangTruyenCoTichVietNam.mp3', desc: 'Bài học về tình cảm anh em, nghĩa vợ chồng thủy chung.' },
        { id: 'story_3', name: 'Sự Tích Trái Sầu Riêng', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/003.SuTichTraiSauRieng_KhoTangTruyenCoTichVietNam.mp3', desc: 'Chuyện tình buồn giải thích về tên gọi và hương vị của trái sầu riêng.' },
        { id: 'story_4', name: 'Sự Tích Chim Tu Hú', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/006.SuTichChimTuHu_KhoTangTruyenCoTichVietNam.mp3', desc: 'Giải thích nguồn gốc loài chim tu hú kêu mỗi độ hè về.' },
        { id: 'story_5', name: 'Sự Tích Chim Quốc', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/007.SuTichChimQuoc_KhoTangTruyenCoTichVietNam.mp3', desc: 'Câu chuyện cảm động về sự trung thành và nỗi lòng của loài chim quốc.' },
        { id: 'story_6', name: 'Sự Tích Con Muỗi', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/011.SuTichConMuoi_KhoTangCoTichVietNam.mp3', desc: 'Bài học về sự phản bội và nguồn gốc của loài muỗi.' },
        { id: 'story_7', name: 'Sự Tích Con Khỉ', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/012.SuTichConKhi_KhoTangCoTichVietNam.mp3', desc: 'Câu chuyện dân gian hài hước về nguồn gốc loài khỉ.' },
        { id: 'story_8', name: 'Sự Tích Cá Heo', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/013.SuTichCaHe_KhoTangCoTichVietNam.mp3', desc: 'Câu chuyện về loài cá thông minh và giúp người trên biển.' },
        { id: 'story_9', name: 'Sự Tích Dã Tràng', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/015.SuTichDaTrang_KhoTangCoTichVietNam.mp3', desc: 'Truyền thuyết về nỗ lực vô vọng của dã tràng xe cát.' },
        { id: 'story_10', name: 'Sự Tích Lông Quạ và Công', url: 'https://archive.org/download/kho-tang-truyen-co-tich-viet-nam.sna/016.GocTichBoLongQuaVaBoLongCong_KhoTangCoTichVietNam.mp3', desc: 'Vì sao chim công rực rỡ còn quạ lại đen thui?' }
    ]
};

// ============================================================
// DANH HIỆU (BADGES)
// ============================================================
const BADGES_LIST = [
    { id: 'streak_3', name: 'Dũng Sĩ Chuyên Cần', emoji: '🔥', desc: 'Học liên tiếp 3 ngày', target: 3 },
    { id: 'stars_100', name: 'Triệu Phú Ngôi Sao', emoji: '💰', desc: 'Tích lũy 100 sao', target: 100 },
    { id: 'math_expert', name: 'Thần Đồng Toán Học', emoji: '📐', desc: 'Đúng 50 câu toán bổ sung', target: 50 },
    { id: 'early_bird', name: 'Chim Non Chăm Chỉ', emoji: '🐣', desc: 'Check-in trước 8h sáng', target: 8 }
];

// ============================================================
// KIẾN THỨC THÚ VỊ (TRIVIA)
// ============================================================
const TRIVIA_LIST = [
    { id: 1, fact: "Mật ong là thực phẩm duy nhất không bao giờ bị hỏng.", topic: "Khoa học" },
    { id: 2, fact: "Bạch tuộc có đến 3 quả tim và máu của chúng màu xanh.", topic: "Động vật" },
    { id: 3, fact: "Ốc sên có thể ngủ một giấc kéo dài tận 3 năm.", topic: "Động vật" },
    { id: 4, fact: "Kim cương được tạo ra từ than chì dưới áp suất cực lớn.", topic: "Địa chất" },
    { id: 5, fact: "Cầu vồng thực chất là một vòng tròn đầy đủ, không phải hình cung.", topic: "Thiên nhiên" },
    { id: 6, fact: "Sao Kim là hành tinh duy nhất quay ngược chiều kim đồng hồ.", topic: "Vũ trụ" },
    { id: 7, fact: "Cá voi xanh có trái tim to bằng một chiếc xe ô tô con.", topic: "Động vật" },
    { id: 8, fact: "Dấu vân lưỡi của mỗi người là duy nhất, cũng giống như dấu vân tay.", topic: "Cơ thể người" },
    { id: 9, fact: "Cây chuối thực chất là một loại cỏ khổng lồ, không phải cây thân gỗ.", topic: "Thực vật" },
    { id: 10, fact: "Kiến không có phổi, chúng thở qua các lỗ nhỏ trên khắp cơ thể.", topic: "Động vật" },
    { id: 11, fact: "Trên Sao Hỏa, hoàng hôn có màu xanh dương thay vì màu đỏ.", topic: "Vũ trụ" },
    { id: 12, fact: "Ngựa và chuột không thể nôn mửa.", topic: "Động vật" },
    { id: 13, fact: "Mắt của con đà điểu còn to hơn cả bộ não của nó.", topic: "Động vật" },
    { id: 14, fact: "Một đám mây tích điện có thể nặng tương đương 100 con voi.", topic: "Thiên nhiên" },
    { id: 15, fact: "Nước nóng đóng băng nhanh hơn nước lạnh trong một số điều kiện.", topic: "Khoa học" }
];

// ============================================================
// CẤU HÌNH PHẦN THƯỞNG THẬT (PHỤ HUYNH)
// ============================================================
const PARENT_REWARDS = [
    { id: 'r1', name: 'Một ly trà sữa trân châu', targetStars: 50, emoji: '🧋' },
    { id: 'r2', name: 'Đi xem phim cuối tuần', targetStars: 150, emoji: '🍿' },
    { id: 'r3', name: 'Một bộ váy mới/Đồ chơi mới', targetStars: 300, emoji: '👗' },
    { id: 'r4', name: 'Một chuyến du lịch cả nhà', targetStars: 1000, emoji: '✈️' },
    { id: 'r5', name: 'Một ngày vui chơi công viên nước', targetStars: 500, emoji: '🌊' },
];

// Cập nhật SHOP_ITEMS hỗ trợ cấp độ
const SHOP_ITEMS_EXTENDED = [
    ...SHOP_ITEMS.map(item => ({ ...item, level: 1 }))
];

// Export ra global
window.APP_DATA = {
    CONFIG, HOLIDAYS,
    THAO: THAO_DATA,
    HAILINH: HAILINH_DATA,
    DIEP: DIEP_DATA,
    REWARDS, PRAISES, QUOTES,
    SHOP_ITEMS: SHOP_ITEMS_EXTENDED,
    AUDIO_LIBRARY, PARENT_REWARDS,
    BADGES: BADGES_LIST,
    TRIVIA: TRIVIA_LIST
};
