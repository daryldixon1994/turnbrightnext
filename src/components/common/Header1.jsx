import tw from "twin.macro";
const Box = tw.div`flex gap-[10px]`;
const H1 = tw.h1`font-poppins font-normal text-[2.25rem] text-[#001436] uppercase`;
const H2 = tw.h1`font-poppins font-black text-[2.25rem] text-[#001436] uppercase`;
function Header1({ title1, title2 }) {
  return (
    <Box>
      <H1>{title1}</H1>
      <H2>{title2}</H2>
    </Box>
  );
}
export default Header1;
