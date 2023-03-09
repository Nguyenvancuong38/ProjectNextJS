import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import FacebookFilled from "@ant-design/icons/lib/icons/FacebookFilled";

function HeaderFirst() {
    return (
        <div className="flex justify-between items-center">
             <div className="flex justify-start items-center">
                <ul className="">
                    <li><a href="#" target="_blank"><FacebookFilled /></a></li>
                </ul>
                <div className="">
                    <span className="text-[#1f601f]">Hotline:</span>
                    <a className="text-[red]" href="#">1111111111</a>
                </div>
             </div>
             <div className="">
                <ul className="flex justify-end">
                    <li>
                        <span className="text-[#1f601f]">Tổng đài tư vấn:</span>
                        <a className="text-[red]" href="">2222222222</a>
                    </li>
                    <li>
                        <span className="text-[#666]">Tài khoản</span>
                        <span><DownOutlined /></span>
                    </li>
                </ul>
             </div>
        </div>
    )
}

export default HeaderFirst;
