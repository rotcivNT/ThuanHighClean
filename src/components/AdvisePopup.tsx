import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { services } from "@/data/services";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import axiosClient from "@/api/axiosClient";
import { toast } from "sonner";

interface FormFields {
  nameOfCustomer: string;
  phone: string;
  service: string;
  message: string;
}

const AdvisePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [formData, setFormData] = useState<FormFields>({
    nameOfCustomer: "",
    phone: "",
    service: "",
    message: "",
  });

  const onChange = (
    key: keyof FormFields,
    value: FormFields[keyof FormFields]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      await axiosClient.post("/api/message", {
        ...formData,
      });
      toast("Đã gửi lời nhắn", {
        description:
          "Cảm ơn bạn đã để lại lời nhắn. ThuanHighClean sẽ liên hệ với bạn sớm nhất.",
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (openCount < 2) {
      const timer = setTimeout(
        () => {
          setShowPopup(true);
          setOpenCount((prev) => prev + 1);
        },
        openCount === 1 ? 10000 : 15000
      );

      return () => clearTimeout(timer);
    }
  }, [openCount]);

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="bg-white !rounded-[12px] p-0 shadow-lg">
        <ScrollArea className="w-full max-h-[90vh] py-6">
          <DialogHeader className="px-6 pb-6">
            <div className="flex flex-row justify-center items-center">
              <img
                className="w-[100px] mb-4 rounded-full"
                src="/assets/images/logo.png"
                alt="Thuan High Clean"
              />
              <p className="mx-4 font-bold text-lg text-primary">
                {" "}
                THUAN HIGH CLEAN
              </p>
            </div>
            <DialogTitle className="text-xl font-bold text-[#333]">
              Đăng ký tư vấn
            </DialogTitle>
          </DialogHeader>
          <div className="block px-6">
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label className="block text-secondary font-semibold">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="name"
                  spellCheck="false"
                  value={formData.nameOfCustomer}
                  className="w-full h-9 text-[15px] p-2 mt-2 border rounded-[8px] focus:outline-none ring-2 ring-transparent focus:ring-primary"
                  placeholder="Nhập họ và tên"
                  required
                  onChange={(e) => onChange("nameOfCustomer", e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-secondary font-semibold">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  spellCheck="false"
                  name="phone"
                  value={formData.phone}
                  className="w-full h-9 text-[15px] p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nhập số điện thoại"
                  required
                  onChange={(e) => onChange("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-secondary font-semibold">
                Dịch vụ cần tư vấn
              </label>
              <select
                name="service"
                value={formData.service}
                className="w-full text-[15px] text-secondary p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                required
                onChange={(e) => onChange("service", e.target.value)}
              >
                <option value="" disabled>
                  Chọn dịch vụ
                </option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-secondary font-semibold">
                Lời nhắn
              </label>
              <textarea
                name="message"
                value={formData.message}
                className="w-full text-[15px] p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
                placeholder="Nhập lời nhắn..."
                required
                onChange={(e) => onChange("message", e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button
                onClick={onSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:text-white font-bold py-3 px-4 rounded-[8px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Để lại lời nhắn
              </Button>
            </DialogFooter>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisePopup;
