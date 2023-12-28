// import images
import LogoImg from '../src/img/header/logo.png';
import AvatarImg1 from '../src/img/testimonial/avabasir.png';
import AvatarImg2 from '../src/img/testimonial/avasandi.png';
import AvatarImg3 from '../src/img/testimonial/avamimosa.png';
import AvatarImg4 from '../src/img/testimonial/avasambal.png';
import AvatarImgx1 from '../src/img/testimonial/avaisg.png';
import AvatarImgx2 from '../src/img/testimonial/avafinnix.png';
import AvatarImgx3 from '../src/img/testimonial/avaol.png';
import AvatarImgx4 from '../src/img/testimonial/avajg.png';
import HeroImg from '../src/img/hero/image.svg';
// import AvatarImg5 from '../src/img/testimonial/avatar5.png';
// import AvatarImg6 from '../src/img/testimonial/avatar6.png';
import Feature1Img from '../src/img/features/sp1.png';
import Feature2Img from '../src/img/features/sp2.png';
import Feature3Img from '../src/img/features/sp3.png';
import ArrowRightImg from '../src/img/features/arrow-right.svg';
import PricingIcon1 from '../src/img/pricing/icon1.svg';
import PricingIcon2 from '../src/img/pricing/icon2.svg';
import PricingIcon3 from '../src/img/pricing/icon3.svg';
import Porto1 from '../src/img/testimonial/porto1.png'
import Porto2 from '../src/img/testimonial/porto2.png'
import Porto3 from '../src/img/testimonial/porto3.png'
import Porto4 from '../src/img/testimonial/porto4.png'
import Portomp1 from '../src/img/testimonial/portomp1.png'
import Portomp2 from '../src/img/testimonial/portomp2.png'
import Portomp3 from '../src/img/testimonial/portomp3.png'
import Portomp4 from '../src/img/testimonial/portomp4.png'
import Portosm1 from '../src/img/testimonial/portosm1.png'
import Portosm2 from '../src/img/testimonial/portosm2.png'
import Portosm3 from '../src/img/testimonial/portosm3.png'
import Portosm4 from '../src/img/testimonial/portosm4.png'
import CtaImg1 from '../src/img/cta/image1.svg';
import CtaImg2 from '../src/img/cta/image2.svg';
import FacebookIcon from '../src/img/copyright/facebook.svg';
import TwitterIcon from '../src/img/copyright/twitter.svg';
import LinkedinIcon from '../src/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Hubungi kami',
};

export const nav = [
  { name: 'Tentang Kami', href: '#kami' },
  { name: 'Pilihan Paket', href: '#priced' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Workshop', href: '#located' },
];

export const hero = {
  title: 'Ayo buat brand kamu menarik !!!',
  subtitle: 'Kami siap membangun brand kamu lebih menarik dan proffesional',
  btnText: 'Hubungi kami',
  // compText: '— Web, iOS and Android',
  image: HeroImg,
};

export const features = {
  feature1: {
    pretitle: 'Grow up your business',
    title: 'Company Branding',
    subtitle:
      'Memahami pasar untuk menciptakan merek yang relevan dan memenuhi kebutuhan target audiens Kamu.',
    btnLink: 'Portfolio Kami',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Boost Your Social Media',
    title: 'Social Media Optimization',
    subtitle:
      'Memahami dengan mendalam siapa target audiens Kamu dan membuat konten yang sesuai dengan kebutuhan mereka.',
    btnLink: 'Portfolio kami',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Boost Your Business Product',
    title: 'Ecommerce Specialist',
    subtitle:
      'Kami tidak hanya mendesain, kami mengoptimalkan setiap elemen berdasarkan analisis data yang mendalam.',
    btnLink: 'Portfolio kami',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const pricing = {
  title: 'Pilih Paket Untuk Bisnismu',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Silver Pack',
      services: [
        { name: '12 Desain Konten' },
        { name: '1x Revisi' },
        { name: 'Ide & Konsep Konten' },
      ],
      price: 'Rp 629.000',
      userAmount: 'Direkomedasikan untuk usaha kecil atau baru merintis',
      btnText: 'Pesan Sekarang',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Gold Pack',
      services: [
        { name: '24 Desain Konten' },
        { name: '2x Revisi' },
        { name: 'Copywriting' },
      ],
      price: 'Rp 1.229.000',
      userAmount: 'Direkomedasikan untuk online shop dan usaha kecil menengah',
      btnText: 'Pesan Sekarang',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Pack',
      services: [
        { name: '45 Desain Konten' },
        { name: 'Unlimited Revisi' },
        { name: 'Website Desain' },
      ],
      price: 'Rp 3.429.000',
      userAmount: 'Direkomedasikan untuk online shop besar dan perusahaan',
      btnText: 'Pesan Sekarang',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'Portfolio',
  clients: [
    {
    //   message:
    //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      imgporto: Porto1,
      image: AvatarImg1,
      name: 'Abdul Basyir',
      // position: '( Leader )',
        borderColor: '#0052A3',
    },
    {
      //   message:
      //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      imgporto: Porto2,
      image: AvatarImg2,
      name: 'Bpk. Sandi Prabowo',
      // position: 'CEO',
      borderColor: '#0052A3',
    },
    {
      //   message:
      //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      imgporto: Porto3,
      image: AvatarImg3,
      name: 'Bpk. Wahyu',
      // position: 'CEO',
      borderColor: '#0052A3',
    },
    {
      //   message:
      //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      imgporto: Porto4,
      image: AvatarImg4,
      name: 'Ibu.Aling',
      // position: 'CEO',
      borderColor: '#0052A3',
    },
    // {
    //   message:
    //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      // image: AvatarImg5,
      // name: 'Terri Conroy',
      // position: 'CEO',
    //   borderColor: '#BB7259',
    // },
    // {
    //   message:
    //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      // image: AvatarImg6,
      // name: 'TET Conroy',
      // position: 'CEO',
    //   borderColor: '#BB7259',
    // },
  ],
};
  
export const testimonials2 = {
  clients: [
    {
      imgporto: Portosm1,
      image: AvatarImgx1,
      name: 'Inovtek Sentra Global',
        borderColor: '#0052A3',
    },
    {
      imgporto: Portosm2,
      image: AvatarImgx2,
      name: 'Finnix Store',
      borderColor: '#0052A3',
    },
    {
      imgporto: Portosm3,
      image: AvatarImgx2,
      name: 'Finnix Store',
      borderColor: '#0052A3',
    },
    {
      imgporto: Portosm4,
      image: AvatarImgx1,
      name: 'Inovtek Sentra Global',
      borderColor: '#0052A3',
    },
  ],
};

export const testimonials3 = {
  clients: [
    {
      imgporto: Portomp1,
      image: AvatarImgx1,
      name: 'Inovtek Sentra Global',
      // position: '( Leader )',
        borderColor: '#0052A3',
    },
    {
      imgporto: Portomp2,
      image: AvatarImgx2,
      name: 'Finnix Store',
      // position: 'CEO',
      borderColor: '#0052A3',
    },
    {
      imgporto: Portomp3,
      image: AvatarImgx3,
      name: 'Oriloka Shop',
      // position: 'CEO',
      borderColor: '#0052A3',
    },
    {
      imgporto: Portomp4,
      image: AvatarImgx4,
      name: 'Jualan Gadgets',
      // position: 'CEO',
      borderColor: '#0052A3',
    },
  ],
};

export const cta = {
  title: 'Butuh jasa Foto & Video produk?',
  subtitle: 'Kami juga menyediakan jasanya loh',
  btnText: 'Tanya jasa foto',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  // links: [
  //   { name: 'Home', href: '/' },
  //   { name: 'About us', href: '/' },
  //   { name: 'Careers', href: '/' },
  //   { name: 'Pricing', href: '/' },
  //   { name: 'Features', href: '/' },
  //   { name: 'Blog', href: '/' },
  // ],
  legal: [
    { name: 'Terms of use'},
    { name: 'Terms of conditions'},
    { name: 'Privacy policy'},
    { name: 'Cookie policy'},
  ],
  newsletter: {
    title: 'Feedback',
    subtitle: '1.500 Orang sudah memberi masukan pada Kami',
  },
  form: {
    placeholder: 'Beri Masukan Anda',
    btnText: 'Kirim',
    smallText: 'Harap jangan mengirim email spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    // href: '/',
  },
  // link2: {
  //   name: 'Contact us',
  //   href: 'https://wa.me/62895802377770?text=Hallo,%20Reza', '_blank',
  // },
  link2: {
    name: 'Contact us',
    href: 'https://wa.me/62895802377770?text=Hallo,%20Reza',
    target: '_blank',
  },
  copyText: 'Copyright @ 2024 Republik Project',
  social: [
    { icon: FacebookIcon,},
    { icon: TwitterIcon,},
    { icon: LinkedinIcon,},
  ],
};