import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary pt-20 pb-10">
      <div className="mx-auto max-w-[980px] px-5 text-xs text-text-secondary">
        <div className="border-b border-white/10 pb-10 mb-6">
          <p>
            Designed and developed with precision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p>Copyright © {new Date().getFullYear()} Siddheya Patade. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:underline hover:text-text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:underline hover:text-text-primary">Terms of Use</Link>
            <Link href="#" className="hover:underline hover:text-text-primary">Sales and Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
