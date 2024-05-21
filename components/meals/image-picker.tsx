"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { montserrat } from "@/app/fonts";

type ImagePickerProps = {
  label: string;
  name: string;
};

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState("");

  const imageInput: React.RefObject<HTMLInputElement> = useRef(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event?.target?.files?.[0];
    if (!file) {
      setPickedImage("");
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result) {
        setPickedImage(fileReader.result.toString());
      }
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="border-0 py-2 px-6 rounded-sm cursor-pointer">
      <label
        htmlFor={name}
        className={`uppercase ${montserrat.className} text-[#ddd6cb]`}
      >
        {label}
      </label>
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 flex justify-center items-center text-center color-[#a4abb9] relative border-solid  border-[#454952] border-2 rounded-sm">
          {!pickedImage && <p className="m-0 p-4">No images picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              className="object-cover"
              fill
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          className="hidden"
          required
        />
        <button type="button" onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
