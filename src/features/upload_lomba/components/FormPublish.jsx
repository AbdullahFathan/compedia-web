import React from "react";
import RequiredText from "./RequiredText";
import {
  categoryLomba,
  paketLomba,
  tingkatLomba,
  pelaksanaanLomba,
} from "../../../constants/lomba";
import Dropdown from "../../../components/Dropdown";
import DatePicker from "../../../components/DatePicker";
import PrimaryButton from "../../../components/PrimaryButton";

const FormPublish = () => {
  return (
    <section className="mt-20 mx-4 md:mx-0 flex flex-col justify-center items-center">
      <h2>Form Publish Lomba</h2>
      <h4 className="mt-4">
        Berikut adalah form publish lomba pada aplikasi compedia. Untuk
        melakukan publish, silahkan inputkan informasi lombamu pada form dibawah
        ini:
      </h4>
      <form
        id="form-publish"
        className="flex flex-col justify-start w-full md:w-1/2"
      >
        <RequiredText title="File Poster Lomba" />
        <label className="form-control w-full">
          <input
            type="file"
            className="file-input file-input-bordered file-input-accent bg-neutural-white custom-input  w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan gambar tidak berukuran lebih dari 3 mb dan dalam format
              9:16
            </span>
          </div>
        </label>
        <RequiredText title="Nama Lomba" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Nama Lombamu Disini"
            className="input input-bordered custom-input bg-neutural-white w-full"
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan Nama Lomba yang Kamu Masukkan Sesuai Dan Tidak
              Menggandung SARA
            </span>
          </div>
        </label>
        <RequiredText title="Kategori Lomba (pilih sesuai bidang lomba)" />
        <div className="grid grid-cols-4 xl:grid-cols-7 gap-4 mt-4">
          {categoryLomba.map((item, index) => (
            <label
              key={index}
              className="label cursor-pointer flex items-center"
            >
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text ml-2">{item}</span>
            </label>
          ))}
        </div>
        <RequiredText title="Kampus Penyelenggara" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Nama Kampus Penyelenggara Lomba Disini"
            className="input input-bordered custom-input bg-neutural-white w-full"
          />
          <div className="label">
            <span className="label-text-alt">
              Contoh Cara Penamaan: Universitas Brawijaya (tidak disingkat dan
              diawali kapital)
            </span>
          </div>
        </label>
        <RequiredText title="Biaya Registrasi" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Biaya Registrasi Lomba Disini dalam nilai rupiah"
            className="input input-bordered custom-input bg-neutural-white w-full"
          />
          <div className="label">
            <span className="label-text-alt">
              Jika lomba gratis cukup ditulis 0 dan hanya menginputkan angka
              saja
            </span>
          </div>
        </label>
        <RequiredText title="Tingkat Kompetisi" />
        <Dropdown options={tingkatLomba} />
        <RequiredText title="Pilih Paket Publish Lomba" />
        <Dropdown options={paketLomba} />
        <RequiredText title="Mulai Registrasi" />
        <DatePicker />
        <div className="label">
          <span className="label-text-alt">
            Pilih tanggal kapan lombamu mulai registrasi dan tanggal ini akan
            jadi patokan lombamu masuk pertama kali dalam aplikasi
          </span>
        </div>
        <RequiredText title="Batas Registrasi" />
        <DatePicker />
        <div className="label">
          <span className="label-text-alt">
            Pilih tanggal kapan lombamu terakhir registrasi dan tanggal ini akan
            jadi patokan lombamu terakhir kali dalam aplikasi
          </span>
        </div>
        <RequiredText title="Pelaksanaan Kompetisi" />
        <Dropdown options={pelaksanaanLomba} />
        <RequiredText title="Nama Pihak Lomba" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Nama Pihak Penyelenggara Lomba Disini"
            className="input input-bordered   custom-input bg-neutural-white w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Contoh: COMPFEST UI, Hology UB, dll
            </span>
          </div>
        </label>
        <RequiredText title="Email Pihak Lomba" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Email Pihak Penyelenggara Lomba Disini"
            className="input input-bordered   custom-input bg-neutural-white w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan email tersebut aktif karena email akan digunakan untuk
              mengirim notifikasi pemberitahuan
            </span>
          </div>
        </label>
        <RequiredText title="Instagram Pihak Lomba" isRequired={false} />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Email Pihak Penyelenggara Lomba Disini"
            className="input input-bordered   custom-input bg-neutural-white w-full"
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan email tersebut aktif karena email akan digunakan untuk
              mengirim notifikasi pemberitahuan
            </span>
          </div>
        </label>
        <RequiredText title="Deskripsi Lomba" />
        <label className="form-control w-full">
          <textarea
            placeholder="Tuliskan Deskripsi Lombamu disini"
            className="input input-bordered   custom-input bg-neutural-white w-full "
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan Deskripsimu menarik dan tidak bertele-tele untuk
              memudahkan peserta lomba membacanya dari aplikasi mobile
            </span>
          </div>
        </label>
        <RequiredText title="Deskripsi Hadiah Lomba" />
        <label className="form-control w-full">
          <textarea
            placeholder="Tuliskan Deskripsi Hadiah Lombamu disini"
            className="input input-bordered   custom-input bg-neutural-white w-full "
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan Deskripsimu menarik dan tidak bertele-tele untuk
              memudahkan peserta lomba membacanya dari aplikasi mobile
            </span>
          </div>
        </label>
        <RequiredText title="Link Guidebook Lomba" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Link Guidebook Lomba Disini"
            className="input input-bordered custom-input bg-neutural-white w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Pastikan untuk hanya mengirim link dalam bentuk link drive saja
              karena kami hanya menerima link dalam format google drive!
            </span>
          </div>
        </label>
        <RequiredText title="Link Registrasi Lomba" />
        <label className="form-control w-full">
          <input
            type="text"
            placeholder="Masukkan Link Registrasi Lomba Disini"
            className="input input-bordered custom-input bg-neutural-white w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt">
              Jangan mengirim link dalam bentuk shorten url seperti bit.ly!
              Gunakan link asli dari link web/form untuk registrasi lombamu
            </span>
          </div>
        </label>
        <div className="h-12 w-48 my-4 flex justify-center self-center">
          <PrimaryButton
            title={"Upload Lomba"}
            type="submit"
            formId={"form-publish"}
          />
        </div>
      </form>
    </section>
  );
};

export default FormPublish;
