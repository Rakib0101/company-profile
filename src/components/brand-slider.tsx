import Image from "next/image";

const BrandSlider = () => {
  return (
      <div className="slider-container py-10">
        <div className="slider-content">
          {/* original set */}
          <div className="brand-item">
            <Image src="/images/brands/brand-01.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-02.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-03.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-04.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-05.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          {/* Cloned set for seamless loop */}
          <div className="brand-item">
            <Image src="/images/brands/brand-01.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-02.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-03.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-04.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-05.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-01.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-02.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-03.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-04.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
          <div className="brand-item">
            <Image src="/images/brands/brand-05.png" alt="Naffco" width={100} height={100} className="grayscale aspect-[250/100]" />
          </div>
        </div>
      </div>
  );
};

export default BrandSlider;
