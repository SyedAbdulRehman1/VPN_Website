import Prominent from "./Prominent";

type BrandNameProps = {
  text?: boolean
}
const BrandName: React.FC<BrandNameProps> = ({text}) => {
    return (text ? <span className="dark:text-white ">Virgo VPN</span> : <span><Prominent>Virgo</Prominent> <span className="dark:text-white ">VPN</span> </span>
    );
};

export default BrandName;
