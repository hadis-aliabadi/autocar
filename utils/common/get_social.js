import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const socialMediaGenerator = (data, size = 16) => {
  const social = [];
  if (data.facebook) {
    social.push({
      component: <FaFacebookF size={size} color="#fff" />,
      href: data.facebook,
    });
  }
  if (data.youtube) {
    social.push({
      component: <FaYoutube size={size} color="#fff" />,
      href: data.youtube,
    });
  }
  if (data.instagram) {
    social.push({
      component: <FaInstagram size={size} color="#fff" />,
      href: data.instagram,
    });
  }
  if (data.twitter) {
    social.push({
      component: <FaTwitter size={size} color="#fff" />,
      href: data.twitter,
    });
  }
  return social;
};
