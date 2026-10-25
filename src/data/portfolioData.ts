import type { ProfileInfo, Semester, SchoolStage, MartialArtDetail, BasketballDetail } from '../types';

export const profileData: ProfileInfo = {
  name: "Nguyễn Nhật Minh",
  title: "Software Engineering Student @ FPT University",
  university: "Đại học FPT",
  campus: "FPT University Hanoi Campus (Khu CNC Hòa Lạc)",
  major: "Kỹ thuật Phần mềm (Software Engineering - SE)",
  cohort: "K17 / K18",
  expectedGraduation: "2026",
  status: "Sẵn sàng cho cơ hội Backend Engineer / Full-Stack Engineer",
  bio: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT với niềm đam mê sâu sắc về Kiến trúc hệ thống phân tán (Distributed Systems) và Clean Architecture. Định hướng phát triển thành Software Engineer chú trọng vào hiệu năng cao, tính mở rộng linh hoạt và văn hóa kiểm thử tự động.",
  careerGoals: [
    "Thiết kế và xây dựng các hệ thống Backend chịu tải cao (High Throughput & Low Latency)",
    "Áp dụng triệt để Clean Architecture, DDD và Microservices Patterns vào bài toán thực tiễn",
    "Thực hành văn hóa DevOps: Tự động hóa CI/CD, Containerization và System Observability",
    "Góp phần vào các dự án mã nguồn mở và chia sẻ tri thức kỹ thuật cộng đồng"
  ],
  contacts: {
    email: "nhatminh.se.fpt@gmail.com",
    github: "https://github.com/nhatminh-dev",
    linkedin: "https://linkedin.com/in/nhatminh-se",
    location: "Hà Nội, Việt Nam",
    cvUrl: "#cv-preview"
  },
  metrics: [
    { label: "GPA Tích Lũy", value: "3.78 / 4.0", sublabel: "Top 5% sinh viên ngành SE" },
    { label: "Lộ trình đào tạo", value: "9/9 Kỳ", sublabel: "Từ giải thuật C đến Capstone SEP490" },
    { label: "Đồ án chuyên ngành", value: "8+ Projects", sublabel: "Full-stack, Microservices & AI Pipeline" },
    { label: "Võ thuật & Thể thao", value: "Đai đen 1st Dan", sublabel: "HCV Karate & Đội trưởng Bóng rổ" }
  ]
};

export const semestersData: Semester[] = [
  {
    id: 1,
    term: "Semester 1",
    title: "Nền tảng Lập trình & Tư duy Máy tính",
    academicYear: "2022 - 2023",
    status: "Completed",
    gpa: "3.85 / 4.0",
    description: "Nhập môn khoa học máy tính, rèn luyện tư duy thuật toán chặt chẽ với C, làm chủ con trỏ (pointers), quản lý bộ nhớ Heap/Stack và kiến trúc phần cứng cơ bản.",
    courses: [
      { code: "PRF192", name: "Programming Fundamentals", desc: "Ngôn ngữ C, con trỏ, cấp phát bộ nhớ động malloc/free, struct, đệ quy", credits: 3 },
      { code: "CEA201", name: "Computer Organization and Architecture", desc: "Hệ thống nhị phân, ALU, thanh ghi CPU, tập lệnh assembly cơ bản", credits: 3 },
      { code: "CSI104", name: "Introduction to Computer Science", desc: "Tổng quan các lĩnh vực CNTT, mạng máy tính, thuật toán tìm kiếm và sắp xếp", credits: 3 },
      { code: "MAE101", name: "Mathematics for Engineering", desc: "Giải tích vi tích phân một biến và nhiều biến ứng dụng cho kỹ thuật", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem1-cli",
        title: "Student Academic Record CLI Core",
        subtitle: "Hệ thống quản lý điểm sinh viên tối ưu hóa danh sách liên kết và quản lý bộ nhớ RAM",
        role: "Sole Developer",
        status: "Completed",
        period: "Kỳ 1 • 2022",
        techStack: ["C (C99)", "Pointers", "Doubly Linked List", "Binary File I/O", "Valgrind", "Makefile"],
        githubUrl: "https://github.com/nhatminh-dev/fpt-prf192-student-records",
        architectureHighlight: "Tự cài đặt Doubly Linked List với cơ chế phân bổ bộ nhớ an toàn (Zero Memory Leak xác nhận qua Valgrind).",
        takeaway: {
          problem: "Khi quản lý danh bạ hàng ngàn hồ sơ với mảng tĩnh (Static Array), chương trình dễ bị lỗi Stack Overflow hoặc gây lãng phí lớn bộ nhớ khi số lượng sinh viên dao động thất thường.",
          solution: "Tự thiết kế cấu trúc Danh sách liên kết kép (Doubly Linked List) kết hợp cấp phát động (Dynamic Memory Allocation), lưu trữ dữ liệu tuần tự vào tập tin nhị phân (Binary Serialization) để tăng tốc độ I/O gấp 5 lần so với file text thông thường.",
          engineeringTakeaway: "Hiểu sâu sắc cơ chế tổ chức bộ nhớ (Stack vs. Heap) và hiểm họa Memory Leak. Bài học đầu đời về việc 'dọn sạch những gì mình cấp phát' (free memory) chính là tiền đề cho tư duy tối ưu tài nguyên phần mềm sau này."
        }
      }
    ]
  },
  {
    id: 2,
    term: "Semester 2",
    title: "Lập trình Hướng đối tượng & Hệ điều hành",
    academicYear: "2022 - 2023",
    status: "Completed",
    gpa: "3.75 / 4.0",
    description: "Làm chủ 4 trụ cột OOP với Java (Encapsulation, Inheritance, Polymorphism, Abstraction), thiết kế cấu trúc hướng đối tượng và hiểu sâu về quản lý Process/Thread trong Hệ điều hành.",
    courses: [
      { code: "PRO192", name: "Object-Oriented Programming (Java)", desc: "Java 17, Generic, Collections Framework, Exception Handling, I/O Streams", credits: 3 },
      { code: "MAD101", name: "Discrete Mathematics", desc: "Đại số Boolean, Lý thuyết đồ thị, Cây, Quy nạp toán học, Tổ hợp xác suất", credits: 3 },
      { code: "OSG202", name: "Operating Systems", desc: "Tiến trình (Process), Đa luồng (Threads), Định thời CPU, Deadlock, Semaphore & Mutex", credits: 3 },
      { code: "SSG104", name: "Communication & In-Group Working Skills", desc: "Giao tiếp nhóm hiệu quả, tư duy phản biện, kỹ năng thuyết trình kỹ thuật", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem2-banking",
        title: "Concurrent Virtual Banking Engine",
        subtitle: "Mô phỏng lõi chuyển tiền đa luồng giải quyết triệt để bài toán Race Condition & Deadlock",
        role: "Lead Developer",
        status: "Completed",
        period: "Kỳ 2 • 2023",
        techStack: ["Java 17", "OOP Patterns", "ReentrantLock", "AtomicLong", "Thread Pools", "JUnit 5"],
        githubUrl: "https://github.com/nhatminh-dev/virtual-banking-core",
        architectureHighlight: "Thread-Safe Banking Engine với State Pattern quản lý trạng thái tài khoản và Lock Ordering để ngăn ngừa triệt để Deadlock.",
        takeaway: {
          problem: "Khi mô phỏng 1.000 giao dịch nạp, rút và chuyển khoản đồng thời giữa các tài khoản, dữ liệu bị sai lệch nghiêm trọng (số dư âm, mất tiền ảo) do hiện tượng Race Condition và hiện tượng deadlock khi hai tài khoản chuyển tiền chéo nhau.",
          solution: "Áp dụng cơ chế khóa phân đoạn có thứ tự (Ordered ReentrantLock dựa trên Account ID duy nhất) để ngăn Deadlock, đồng thời sử dụng AtomicLong và ThreadPoolExecutor để quản lý luồng xử lý an toàn.",
          engineeringTakeaway: "OOP không chỉ đơn giản là định nghĩa Class hay Getter/Setter; thiết kế hướng đối tượng xuất sắc đòi hỏi phải bảo vệ tính bất biến (Immutability), bao đóng nghiệp vụ chặt chẽ và luôn đặt câu hỏi 'Hàm này có an toàn trong môi trường đa luồng không?'."
        }
      }
    ]
  },
  {
    id: 3,
    term: "Semester 3",
    title: "Cấu trúc Dữ liệu & Cơ sở Dữ liệu Quan hệ",
    academicYear: "2023 - 2024",
    status: "Completed",
    gpa: "3.88 / 4.0",
    description: "Đột phá về tư duy thuật toán nâng cao (Graph, Tree, Big-O Analysis) và nghệ thuật thiết kế chuẩn hóa Cơ sở Dữ liệu Quan hệ (ERD, 1NF -> BCNF, Indexing).",
    courses: [
      { code: "CSD201", name: "Data Structures and Algorithms", desc: "Binary Search Tree, AVL Tree, Graph (Dijkstra, DFS/BFS, Prim), Hashing, Sorting", credits: 3 },
      { code: "DBI202", name: "Database Systems", desc: "Thiết kế ERD, Chuẩn hóa 3NF/BCNF, Truy vấn T-SQL nâng cao, Index, Transaction ACID", credits: 3 },
      { code: "MAS291", name: "Statistics and Probability", desc: "Thống kê mô tả, phân phối chuẩn, hồi quy tuyến tính, kiểm định giả thuyết", credits: 3 },
      { code: "JPD113", name: "Elementary Japanese 1", desc: "Nhập môn tiếng Nhật giao tiếp kỹ thuật và văn hóa doanh nghiệp Nhật", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem3-transit",
        title: "Smart Campus Transit & Routing Optimizer",
        subtitle: "Hệ thống tối ưu hóa lộ trình xe buýt liên campus FPT Hòa Lạc tích hợp chỉ mục SQL tối ưu",
        role: "Database Architect & Algorithm Dev",
        status: "Completed",
        period: "Kỳ 3 • 2023",
        techStack: ["Java 17", "SQL Server", "Dijkstra Algorithm", "Clustered/Non-Clustered Indexes", "T-SQL Stored Procedures"],
        githubUrl: "https://github.com/nhatminh-dev/fpt-campus-transit-optimizer",
        architectureHighlight: "Dijkstra cải tiến với Min-Heap/PriorityQueue kết hợp SQL Execution Plan tối ưu truy vấn dưới 15ms.",
        takeaway: {
          problem: "Khi cơ sở dữ liệu phình to với hơn 50.000 lịch trình chuyến và hàng ngàn trạm dừng, truy vấn tìm đường đi ngắn nhất kết hợp thông tin trạm trung chuyển mất đến 2.8 giây, gây nghẽn toàn hệ thống.",
          solution: "Phân tích Execution Plan, thêm Non-Clustered Composite Index trên các cặp Foreign Key thường xuyên JOIN, chuyển đổi truy vấn phức tạp sang Stored Procedure tối ưu và viết lại Dijkstra sử dụng Min-Heap.",
          engineeringTakeaway: "Index cơ sở dữ liệu không phải cứ 'càng nhiều càng tốt' vì sẽ làm chậm thao tác WRITE; việc thấu hiểu cách RDBMS quét dữ liệu (Index Seek vs Index Scan) có giá trị tăng tốc gấp 10 lần việc nâng cấp CPU của máy chủ."
        }
      }
    ]
  },
  {
    id: 4,
    term: "Semester 4",
    title: "Phát triển Web Doanh nghiệp & Quy trình SE",
    academicYear: "2023 - 2024",
    status: "Completed",
    gpa: "3.72 / 4.0",
    description: "Bước chân vào thế giới Web Enterprise đa tầng, tiếp cận kiến trúc MVC kinh điển, xử lý HTTP Request/Response, Filter Security và quy trình công nghệ phần mềm Agile/Scrum.",
    courses: [
      { code: "PRJ301", name: "Java Web Application Development", desc: "Servlet, JSP, JSTL, MVC Pattern, JDBC, Session Management, Security Filters", credits: 3 },
      { code: "SWE201c", name: "Introduction to Software Engineering", desc: "Quy trình SDLC, Agile/Scrum, User Stories, Biểu đồ UML Use Case, Class, Sequence", credits: 3 },
      { code: "IOT102", name: "Internet of Things", desc: "Vi điều khiển ESP32/Arduino, giao thức MQTT, cảm biến thu thập dữ liệu thời gian thực", credits: 3 },
      { code: "JPD123", name: "Elementary Japanese 2", desc: "Giao tiếp công sở IT tiếng Nhật, đọc hiểu tài liệu kỹ thuật cơ bản", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem4-dorm",
        title: "FPT Smart Dormitory & Maintenance Portal",
        subtitle: "Cổng thông tin quản lý ký túc xá và xử lý báo cáo sự cố cơ sở vật chất theo chuẩn MVC",
        role: "Full-stack Developer & Scrum Master",
        status: "Completed",
        period: "Kỳ 4 • 2024",
        techStack: ["Java Servlet", "JSP", "PostgreSQL", "HikariCP Connection Pool", "Tailwind CSS", "Chart.js"],
        githubUrl: "https://github.com/nhatminh-dev/fpt-dormitory-management",
        architectureHighlight: "Kiến trúc MVC 3 tầng tách biệt Controller - Service - DAO với Connection Pool HikariCP bền vững.",
        takeaway: {
          problem: "Vào đợt sinh viên đổ xô đăng ký phòng đầu kỳ, việc mở kết nối JDBC truyền thống (mỗi request 1 connection mới) làm cạn kiệt Connection Pool của Database, gây sập server (500 Internal Server Error).",
          solution: "Tái cấu trúc tầng kết nối sử dụng HikariCP Connection Pool, cấu hình kích thước pool tối ưu dựa trên số lõi CPU, đồng thời triển khai Authentication/Authorization Filter để bảo vệ các endpoint nhạy cảm.",
          engineeringTakeaway: "Mô hình MVC phân tầng nghiêm ngặt giúp dự án dễ bảo trì và phân công công việc trong nhóm mà không bị giẫm chân lên nhau; quản trị tài nguyên kết nối (Connection Lifecycle) là sống còn đối với Web Backend."
        }
      }
    ]
  },
  {
    id: 5,
    term: "Semester 5",
    title: "Kiến trúc Phần mềm & Đại Đồ án SWP391",
    academicYear: "2024 - 2025",
    status: "Completed",
    gpa: "3.85 / 4.0",
    description: "Thực chiến Đại đồ án chuyên ngành SWP391 với quy trình Scrum doanh nghiệp. Áp dụng Clean Architecture, CQRS, Web API (.NET) hiện đại và Single Page Application (React).",
    courses: [
      { code: "SWP391", name: "Software Development Project", desc: "Đồ án thực chiến 5 thành viên theo chuẩn doanh nghiệp, bảo vệ trước hội đồng phản biện", credits: 3 },
      { code: "SWD392", name: "Software Architecture and Design", desc: "Clean Architecture, Domain-Driven Design (DDD), SOLID, Design Patterns GoF", credits: 3 },
      { code: "SWR302", name: "Software Requirements", desc: "Kỹ nghệ yêu cầu phần mềm, đặc tả SRS theo chuẩn IEEE, ma trận truy vết RTM", credits: 3 },
      { code: "PRN211", name: "Basic Cross-Platform .NET Application", desc: "C# nâng cao, LINQ, Entity Framework Core, Dependency Injection, RESTful API", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem5-eduquest",
        title: "EduQuest - Realtime Gamified Learning LMS",
        subtitle: "Nền tảng thi đấu học tập thời gian thực cho học sinh THPT với kiến trúc Clean Architecture & SignalR",
        role: "Architecture Lead & Full-stack Dev (Team of 5)",
        status: "Production",
        period: "Kỳ 5 • 2024",
        techStack: ["ASP.NET Core Web API", "React", "TypeScript", "Tailwind CSS", "Entity Framework Core", "SQL Server", "SignalR", "Redis", "Docker"],
        githubUrl: "https://github.com/nhatminh-dev/eduquest-lms-swp391",
        liveUrl: "https://github.com/nhatminh-dev/eduquest-lms-swp391",
        architectureHighlight: "Clean Architecture 4 tầng (Domain, Application với MediatR CQRS, Infrastructure, WebAPI) + SignalR Hub với Redis Backplane.",
        takeaway: {
          problem: "Khi diễn ra phòng thi trực tiếp với hơn 300 học sinh tranh tài cùng lúc, WebSocket server bị quá tải bộ nhớ và điểm số bị lệch thứ tự (out-of-order state) do độ trễ mạng chênh lệch giữa các client.",
          solution: "Tách phòng thi thành các Room Channels độc lập quản lý bởi SignalR Backplane kết hợp Redis In-Memory Data Store, xử lý chấm điểm và xếp hạng bằng cơ chế Redis Sorted Sets với độ phức tạp O(log(N)).",
          engineeringTakeaway: "Việc đầu tư thiết lập Clean Architecture và tách biệt Domain Models khỏi Database Entities ngay từ tuần đầu tiên đã cứu cả đội trong tuần Sprint áp chót khi giảng viên yêu cầu thay đổi hoàn toàn logic tính điểm thưởng; mã nguồn không bị thắt nút rối (spaghetti code)."
        }
      }
    ]
  },
  {
    id: 6,
    term: "Semester 6",
    title: "On-the-Job Training (OJT - Thực tập Doanh nghiệp)",
    academicYear: "2024 - 2025",
    status: "Completed",
    gpa: "3.92 / 4.0",
    description: "Thực tập toàn thời gian 4 tháng tại Doanh nghiệp công nghệ hàng đầu (FPT Software Global Delivery Unit). Trực tiếp tham gia phát triển hệ thống khách hàng quốc tế với quy trình CI/CD và Code Review chuẩn mực.",
    courses: [
      { code: "OJT", name: "On-the-Job Training (Internship)", desc: "Làm việc toàn thời gian tại Doanh nghiệp, cọ xát với hệ thống Production quy mô lớn", credits: 10 }
    ],
    projects: [
      {
        id: "proj-sem6-ojt",
        title: "Enterprise Logistics Event Streaming & Telemetry Core",
        subtitle: "Hệ thống giám sát chuỗi cung ứng container toàn cầu theo thời gian thực giải quyết bài toán nghẽn I/O",
        role: "Backend Engineer Intern @ Global Delivery Unit",
        status: "Completed",
        period: "Kỳ 6 • 2024 - 2025",
        techStack: [".NET 8", "Apache Kafka", "PostgreSQL", "Docker", "Prometheus", "Grafana", "xUnit", "OpenTelemetry"],
        githubUrl: "https://github.com/nhatminh-dev/ojt-logistics-event-core",
        architectureHighlight: "Event-Driven Consumer Service với Kafka Batch Consumer và Worker Service tối ưu hóa số lượng database roundtrips.",
        takeaway: {
          problem: "Hàng trăm thiết bị GPS container gửi dữ liệu tọa độ và nhiệt độ liên tục (hơn 4.000 events/giây) làm ngập hàng đợi ghi của PostgreSQL, gây tăng thời gian phản hồi API và tiêu tốn CPU máy chủ.",
          solution: "Xây dựng dịch vụ Streaming Consumer dựa trên Apache Kafka kết hợp kỹ thuật Micro-batching: gom các sự kiện trong khoảng 500ms vào bộ nhớ đệm trước khi thực thi Bulk Insert vào PostgreSQL, giảm 85% số lượt truy cập đĩa cứng.",
          engineeringTakeaway: "Văn hóa kỹ thuật chuyên nghiệp tại doanh nghiệp dạy cho tôi rằng: 'Không có dòng code nào được merge nếu thiếu Unit Test và thiếu khả năng quan sát (Observability)'. Một hệ thống tốt không chỉ chạy đúng lúc test, mà phải cung cấp đủ Metric và Log khi có sự cố trên Production."
        }
      }
    ]
  },
  {
    id: 7,
    term: "Semester 7",
    title: "Phát triển Di động Đa nền tảng & Đảm bảo Chất lượng (QA)",
    academicYear: "2025",
    status: "Completed",
    gpa: "3.80 / 4.0",
    description: "Mở rộng năng lực lập trình sang Mobile đa nền tảng (Flutter), làm chủ quản trị trạng thái (Bloc Pattern), tích hợp phần cứng và quy trình kiểm thử tự động toàn diện (Automation Testing).",
    courses: [
      { code: "PRM392", name: "Mobile Programming", desc: "Flutter, Dart, Bloc State Management, Local Storage (Hive/SQLite), Push Notifications", credits: 3 },
      { code: "SWT301", name: "Software Testing", desc: "Kiểm thử hộp đen/hộp trắng, tự động hóa với Selenium & Playwright, kiểm thử tải JMeter", credits: 3 },
      { code: "PRN221", name: "Advanced Cross-Platform .NET", desc: "Razor Pages, Blazor WebAssembly, Microservices communication với gRPC", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem7-fitpulse",
        title: "FitPulse - Karate & Athletic Performance Companion",
        subtitle: "Ứng dụng di động theo dõi lộ trình võ thuật, bài tập thể lực và phân tích chu kỳ phục hồi cơ thể",
        role: "Sole Mobile & Backend Developer",
        status: "Completed",
        period: "Kỳ 7 • 2025",
        techStack: ["Flutter", "Dart", "Bloc Pattern", "FastAPI (Python)", "SQLite", "JMeter", "GitHub Actions"],
        githubUrl: "https://github.com/nhatminh-dev/fitpulse-mobile-companion",
        liveUrl: "https://github.com/nhatminh-dev/fitpulse-mobile-companion",
        architectureHighlight: "Offline-First Mobile Architecture với Local SQLite Cache đồng bộ ngầm khi có mạng Internet.",
        takeaway: {
          problem: "Khi võ sinh tập luyện tại võ đường dưới tầng hầm không có sóng 4G/Wifi, ứng dụng thường xuyên bị lỗi mất dữ liệu bài tập hoặc màn hình bị đơ (jank / UI freeze) khi tính toán nhịp tim thời gian thực.",
          solution: "Thiết kế kiến trúc Offline-First: toàn bộ dữ liệu ghi trước vào SQLite cục bộ; các phép tính toán đồ thị nặng được chuyển sang chạy trên Isolate riêng biệt của Dart để giải phóng Main UI Thread ở mức 60fps mượt mà.",
          engineeringTakeaway: "Kiểm thử phần mềm không phải là việc làm sau cùng (Afterthought) mà phải tích hợp từ khâu thiết kế. Viết Unit Test cho Bloc State và chạy kiểm thử tải với JMeter giúp tôi tự tin rằng app không bao giờ bị crash trước hàng nghìn request đột biến."
        }
      }
    ]
  },
  {
    id: 8,
    term: "Semester 8",
    title: "Hệ thống Phân tán & Điện toán Đám mây",
    academicYear: "2025 - 2026",
    status: "Completed",
    gpa: "3.88 / 4.0",
    description: "Kiến trúc Microservices chuyên sâu, giao tiếp liên dịch vụ qua gRPC và Message Broker (RabbitMQ), thiết kế chịu lỗi (Fault-Tolerance) và quản trị dự án theo chỉ số định lượng EVM.",
    courses: [
      { code: "PRN231", name: "Building Web API with Microservices", desc: "Microservices Architecture, gRPC, RabbitMQ, Docker Compose, Ocelot API Gateway", credits: 3 },
      { code: "PRU211", name: "Advanced Cloud & Systems Integration", desc: "Điện toán đám mây (AWS/GCP), Container Orchestration (K8s), Serverless, CI/CD", credits: 3 },
      { code: "SWM301", name: "Software Project Management", desc: "Quản trị rủi ro dự án phần mềm, dự toán chi phí, chỉ số Earned Value Management (EVM)", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem8-cloudmart",
        title: "CloudMart - High-Throughput E-Commerce Microservices",
        subtitle: "Hệ thống thương mại điện tử phân tán xử lý giao dịch chịu tải cao với SAGA Pattern & Circuit Breaker",
        role: "System Architect & Backend Lead",
        status: "Production",
        period: "Kỳ 8 • 2025 - 2026",
        techStack: [".NET 8", "gRPC", "RabbitMQ", "Redis Cache", "PostgreSQL", "Docker Compose", "Polly Circuit Breaker", "Ocelot"],
        githubUrl: "https://github.com/nhatminh-dev/cloudmart-microservices-system",
        architectureHighlight: "SAGA Choreography Pattern kết hợp Outbox Pattern đảm bảo tính nhất quán dữ liệu (Eventual Consistency) mà không dùng 2PC.",
        takeaway: {
          problem: "Khi thực hiện chuỗi giao dịch Đặt hàng -> Trừ kho -> Trừ tiền, nếu dịch vụ Thanh toán bị sập giữa chừng, hệ thống rơi vào trạng thái không nhất quán (tiền chưa trừ nhưng kho đã bị giảm hàng).",
          solution: "Thay vì dùng phân tán hai pha (Two-Phase Commit) làm chậm hệ thống, tôi áp dụng SAGA Choreography Pattern với các thông điệp bù trừ (Compensating Transactions) qua RabbitMQ, kết hợp Outbox Pattern và Polly Circuit Breaker.",
          engineeringTakeaway: "Định lý CAP và 8 ngộ nhận về điện toán phân tán (Fallacies of Distributed Computing) là có thật: 'Đường truyền mạng luôn có thể bị đứt'. Một kỹ sư backend giỏi là người luôn thiết kế hệ thống theo tâm thế 'Sẵn sàng đón nhận lỗi' (Design for Failure) và đảm bảo tính Idempotent cho mọi thông điệp."
        }
      }
    ]
  },
  {
    id: 9,
    term: "Semester 9",
    title: "Đại Đồ án Tốt nghiệp Kỹ sư (Capstone SEP490)",
    academicYear: "2026",
    status: "In Progress",
    gpa: "3.92 / 4.0 (Hiện tại)",
    description: "Đồ án tốt nghiệp 6 tháng chứng minh năng lực kỹ sư toàn diện: giải quyết bài toán bóc tách, chuẩn hóa và bảo mật hồ sơ bệnh án đa nguồn bằng kiến trúc phần mềm tin cậy cao và AI.",
    courses: [
      { code: "SEP490", name: "Software Engineering Capstone Project", desc: "Đồ án tốt nghiệp 6 tháng, bảo vệ công khai trước Hội đồng chuyên gia công nghệ", credits: 10 },
      { code: "MLN122", name: "Philosophy & Professional Ethics", desc: "Đạo đức nghề nghiệp kỹ sư phần mềm, bảo vệ quyền riêng tư dữ liệu và AI Ethics", credits: 3 }
    ],
    projects: [
      {
        id: "proj-sem9-capstone",
        title: "AutoDocFlow - AI-Powered Medical Record Pipeline & Verification",
        subtitle: "Nền tảng chuẩn hóa dữ liệu hồ sơ y tế với xử lý phi đồng bộ, mã hóa phong bì (Envelope Encryption) và Clean Architecture",
        role: "Lead Backend & Infrastructure Engineer (Team of 4)",
        status: "In Progress",
        period: "Kỳ 9 • 2026",
        techStack: ["Go (Golang)", "Python FastAPI (AI Pipeline)", "React", "PostgreSQL", "Milvus Vector DB", "Docker", "GitHub Actions CI/CD"],
        githubUrl: "https://github.com/nhatminh-dev/autodocflow-capstone-sep490",
        liveUrl: "https://github.com/nhatminh-dev/autodocflow-capstone-sep490",
        architectureHighlight: "Event-Driven Asynchronous Pipeline phân tách rạch ròi giữa Golang Core API và Python AI Workers với cơ chế Envelope Encryption.",
        takeaway: {
          problem: "Việc xử lý các tập tin tài liệu y khoa PDF/hình ảnh scan độ phân giải cao mất từ 10 - 25 giây cho mỗi tác vụ bóc tách OCR/LLM. Nếu xử lý đồng bộ qua REST HTTP thông thường, kết nối client sẽ bị timeout và làm nghẽn máy chủ chính.",
          solution: "Thiết kế kiến trúc Asynchronous Task Queue với Go Worker Pool: Golang Core API tiếp nhận file, lưu trữ mã hóa và trả về Task ID ngay tức thì (< 50ms); các tác vụ AI nặng được gửi sang Python Worker qua hàng đợi thông điệp; kết quả sau khi xử lý được thông báo tới Client qua Server-Sent Events (SSE).",
          engineeringTakeaway: "Đồ án tốt nghiệp không chỉ là chạy được mô hình AI, mà là một bài toán Kỹ nghệ Phần mềm hoàn chỉnh: tính bảo mật chuẩn HIPAA/GDPR, khả năng kiểm thử tự động từ Unit đến End-to-End, tính ổn định khi mở rộng quy mô (Scalability) và sự tường minh trong tài liệu kiến trúc kỹ thuật."
        }
      }
    ]
  }
];

export const schoolStagesData: SchoolStage[] = [
  {
    id: "high-school",
    name: "Cấp 3 (High School)",
    subtitle: "Giai đoạn định hình đam mê thuật toán & nghiên cứu khoa học",
    schoolName: "Trường THPT Chuyên / Trọng Điểm",
    period: "2019 - 2022",
    badge: "Giải Nhì HSG Tỉnh & Giải KHKT",
    highlights: [
      {
        year: "2022",
        title: "Giải Nhì Học sinh Giỏi cấp Tỉnh môn Tin học",
        desc: "Thành tích thuật toán nâng cao với C++: Đồ thị, Quy hoạch động đa chiều, Cây chỉ số nhị phân Fenwick và Segment Tree.",
        type: "award"
      },
      {
        year: "2021",
        title: "Giải Ba Cuộc thi Khoa học Kỹ thuật (KHKT) cấp Tỉnh",
        desc: "Dự án nghiên cứu: 'Hệ thống giám sát và cảnh báo sớm chất lượng không khí học đường ứng dụng vi điều khiển và IoT'.",
        type: "award"
      },
      {
        year: "2020 - 2022",
        title: "Chủ nhiệm CLB Tin học trẻ & Bí thư Chi đoàn",
        desc: "Sáng lập và điều hành câu lạc bộ lập trình, tổ chức chuỗi workshop nhập môn thuật toán cho hơn 250 học sinh khóa dưới.",
        type: "leadership"
      },
      {
        year: "2019 - 2022",
        title: "Học sinh Giỏi Toàn diện 3 năm liên tiếp",
        desc: "Điểm trung bình các môn Tự nhiên (Toán - Tin - Lý) luôn đạt trên 9.2, hình thành kỷ luật tự học bền bỉ.",
        type: "activity"
      }
    ],
    reflection: "Thời cấp 3 chính là chiếc nôi đã thắp lên ngọn lửa đam mê lập trình trong tôi. Những đêm thức trắng bên màn hình tìm lỗi đệ quy hay tối ưu từng phần trăm giây của thuật toán C++ đã rèn luyện cho tôi tính kiên định trước những bài toán hóc búa."
  },
  {
    id: "secondary-school",
    name: "Cấp 2 (Secondary School)",
    subtitle: "Rèn giũa tư duy logic toán học & những dòng code đầu đời",
    schoolName: "Trường THCS Trọng Điểm",
    period: "2015 - 2019",
    badge: "Giải Ba HSG Toán & Tin học Trẻ",
    highlights: [
      {
        year: "2019",
        title: "Giải Ba Học sinh Giỏi cấp Thành phố môn Toán học",
        desc: "Đạt thành tích nổi bật ở mảng Bất đẳng thức đại số, Số học và Hình học không gian phẳng.",
        type: "award"
      },
      {
        year: "2018",
        title: "Giải Khuyến Khích Hội thi Tin học Trẻ cấp Tỉnh/Thành phố",
        desc: "Lần đầu tiên tiếp xúc với ngôn ngữ Pascal và giải các bài toán quy nạp, dãy số Fibonacci.",
        type: "award"
      },
      {
        year: "2015 - 2019",
        title: "Lớp phó Học tập & Đội viên tiêu biểu cấp Quận",
        desc: "Phụ trách đôi bạn cùng tiến, giúp đỡ các bạn học sinh yếu môn Toán vươn lên đạt kết quả khá giỏi.",
        type: "leadership"
      }
    ],
    reflection: "Tư duy giải toán chặt chẽ thời cấp 2 đã mang lại cho tôi trực giác nhạy bén khi phân tích dữ liệu và tư duy trừu tượng trong khoa học máy tính. Cảm giác kỳ diệu khi chương trình Pascal đầu tiên xuất dòng chữ 'Hello World' trên màn hình xanh CRT cổ điển vẫn còn vẹn nguyên."
  },
  {
    id: "primary-school",
    name: "Cấp 1 (Primary School)",
    subtitle: "Sự tò mò thuở nhỏ với chiếc máy tính & những dấu mốc trưởng thành",
    schoolName: "Trường Tiểu học Chuẩn Quốc Gia",
    period: "2010 - 2015",
    badge: "Tin học Trẻ & Chỉ huy Đội",
    highlights: [
      {
        year: "2015",
        title: "Giải Nhì Hội thi Tin học Trẻ Khối Tiểu học",
        desc: "Sáng tạo trò chơi giải đố thông minh bằng ngôn ngữ khối lệnh Scratch và lập trình điều khiển Logo Rùa.",
        type: "award"
      },
      {
        year: "2014",
        title: "Giải Ba Giao lưu Toán Tuổi Thơ cấp Quận",
        desc: "Khám phá niềm say mê với các câu đố quy luật số học và hình học trực quan.",
        type: "award"
      },
      {
        year: "2010 - 2015",
        title: "Liên đội phó & Đạt danh hiệu Cháu ngoan Bác Hồ",
        desc: "Luôn tích cực trong các hoạt động văn nghệ, thể dục thể thao và sinh hoạt tập thể tại nhà trường.",
        type: "leadership"
      }
    ],
    reflection: "Thuở ấu thơ với chiếc máy tính để bàn chạy Windows XP của gia đình là khởi đầu cho mọi sự say mê. Thói quen tò mò muốn biết 'Bên trong chiếc hộp CPU kia chứa những gì và phần mềm hoạt động ra sao' đã dẫn dắt tôi từng bước trên hành trình kỹ sư phần mềm hôm nay."
  }
];

export const karateData: MartialArtDetail = {
  discipline: "Suzucho Karatedo / Shotokan",
  rank: "Đai đen Nhất đẳng (Shodan - 1st Dan Black Belt)",
  experience: "8+ năm kiên trì rèn luyện (từ 2018 đến nay)",
  role: "Võ sinh cao cấp & Trợ giảng / Huấn luyện viên thể lực CLB Karate",
  medals: [
    "Huy chương Vàng Kumite (Đối kháng cá nhân) - Giải Vô địch Karate Sinh viên FPT University",
    "Huy chương Bạc Kata (Quyền biểu diễn đồng đội) - Hội khỏe Thể thao Sinh viên",
    "Chứng chỉ Trợ giảng & Trọng tài cấp CLB do Võ phái chứng nhận"
  ],
  philosophy: "Võ đạo không phải để chiến thắng người khác, mà là để chiến thắng sự yếu đuối, lười biếng và giới hạn của chính bản thân mình (Khắc kỷ & Tôn trọng).",
  engineeringAnalogy: "Trong Karate, một cú đấm Gyaku-tsuki hoàn hảo không đến từ việc dồn toàn bộ gồng cứng cơ bắp, mà là sự thả lỏng tối đa rồi bộc phát đúng thời điểm, kết hợp nhịp thở và trọng tâm ổn định. Điều này phản chiếu trọn vẹn triết lý Kiến trúc Phần mềm: một hệ thống tốt không cần phải phức tạp hóa hay over-engineering, mà cần sự tinh gọn (KISS), định hướng đúng ranh giới trách nhiệm (Separation of Concerns) và sự bền bỉ qua hàng vạn chu kỳ vận hành."
};

export const basketballData: BasketballDetail = {
  position: "Point Guard (PG) / Shooting Guard (SG) - Nhạc trưởng điều phối trận đấu",
  experience: "5+ năm tham gia các giải đấu phong trào trường & liên trường",
  role: "Đội trưởng Đội bóng rổ Khoa Kỹ thuật Phần mềm (FPT SE Basketball Team)",
  tournaments: [
    "Vô địch Giải Bóng rổ Tân sinh viên Đại học FPT",
    "Huy chương Đồng Giải Bóng rổ 3x3 FPT University Championship",
    "Cầu thủ kiến tạo xuất sắc nhất (Top Assist Player) giải đấu khoa CNTT"
  ],
  philosophy: "Tấn công mang lại sự chú ý, nhưng phòng thủ và sự ăn ý đồng đội mới là thứ đem về chức vô địch.",
  teamworkAnalogy: "Là một Point Guard, nhiệm vụ tối thượng của tôi trên sân không phải là tự mình ghi điểm nhiều nhất, mà là duy trì góc nhìn toàn cảnh (Spatial Awareness), đọc vị hàng thủ đối phương và chuyền bóng chuẩn xác đến tay đồng đội đang ở thế trống trải. Điều này hoàn toàn tương đồng với vai trò của một Software Engineer trong nhóm: thấu hiểu luồng dữ liệu (Data Flow), giao tiếp rõ ràng, giảm thiểu xung đột và hỗ trợ tối đa cho từng mắt xích để cả cỗ máy cùng về đích."
};

export const otherPassions = [
  {
    title: "Technical Writing & Open Source",
    desc: "Viết bài chia sẻ kỹ thuật về Database Indexing, Clean Architecture và kinh nghiệm gỡ lỗi hệ thống trên blog cá nhân.",
    tag: "Sharing & Growth"
  },
  {
    title: "Specialty Coffee & Pour-over V60",
    desc: "Sự chuẩn xác về nhiệt độ nước, kích thước hạt xay và thời gian chiết xuất mang lại cảm giác tập trung tuyệt đối trước mỗi buổi code.",
    tag: "Mindfulness"
  },
  {
    title: "Mechanical Keyboards & Ergonomics",
    desc: "Tìm hiểu cấu trúc switch, lube switch tỉ mỉ và xây dựng góc làm việc công thái học bảo vệ sức khỏe lập trình viên.",
    tag: "Craftsmanship"
  }
];
