import { FC, memo } from "react";

export interface FooterProps {

}

const Footer: FC<FooterProps> = ({

}) => {
  return (
    <div className="mt-24 border-t bg-gray-50">
      <div className="pb-6 pt-8 container">
        <h4 className="text-lg font-semibold mb-4">Next.js Base</h4>
        <p>Handcrafted with <span className="text-red-500">&#9829;</span> by <a target="_blank" rel="noreferrer" className="hover:text-blue-500 underline" href="https://twitter.com/yc_codes">Yash Chauhan</a></p>
        <p className="text-gray-600 text-sm mt-6">Copyright &copy; 2021 Yash Chauhan. All rights reserved.</p>
      </div>
    </div>
  );
}

export default memo(Footer);