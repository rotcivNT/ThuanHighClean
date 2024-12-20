const data = [
  {
    icon: "/assets/images/introduce/quality.png",
    title: "Chất lượng",
    description:
      "Đảm bảo chất lượng dịch vụ cho khách hàng. Tất cả các Nhân Viên của chúng tôi đều phải có kinh nghiệm và trải qua chương trình đào tạo, kiểm tra, thử việc nghiêm ngặt.",
  },
  {
    icon: "/assets/images/introduce/favorite.png",
    title: "Tậm tâm",
    description:
      "Luôn đặt mình vào vị trí của khách hàng để mang lại hiệu quả công việc tốt nhất. Thuan High Clean sẽ mang lại giá trị mà khách hàng sẽ mong muốn sử dụng lâu dài",
  },
  {
    icon: "/assets/images/introduce/fast.png",
    title: "Tiện lợi",
    description:
      "Đặt lịch nhanh chóng tiện lợi và nhận việc mọi lúc mọi nơi. Quý khách hàng có thể để lại thông tin trên hộp thoai hoặc có thể liên hệ trực tiếp qua zalo, message, số điện thoại",
  },
  {
    icon: "/assets/images/introduce/growth.png",
    title: "Cải tiến",
    description:
      "Chúng tôi luôn lắng nghe để không ngừng cải tiến công nghệ, đổi mới chính sách, vì trải nghiệm trọn vẹn của người dùng là đích đến của chúng tôi",
  },
];

export default function CoreValue() {
  return (
    <section className="container mx-auto pt-[50px]">
      <h2 className="text-[32px] max-w-[70%] text-black font-bold mb-5">
        Giá trị cốt lõi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-11 gap-3">
        {data.map((item, index) => (
          <div key={index} className="space-y-5 my-3 lg:my-0">
            <img alt="Thuan High Clean" src={item.icon} className="w-[26px]" />

            <h3 className="text-xl text-black font-bold">{item.title}</h3>
            <p className="text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
