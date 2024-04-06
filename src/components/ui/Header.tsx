interface HeaderProps {
  headerTextValue: string;
}

const Header = ({ headerTextValue }: HeaderProps) => {
  return <h1>{headerTextValue}</h1>;
};

export default Header;
