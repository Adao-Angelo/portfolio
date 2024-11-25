import Footer from "./Footer";
import Header from "./Header";

interface Props extends React.HTMLProps<HTMLElement> {}

export default function RootLayout(props: Props) {
  return (
    <main {...props}>
      <div className="px-[13rem] py-[7rem]">
        <Header></Header>
        {props.children}
        <Footer></Footer>
      </div>
    </main>
  );
}
