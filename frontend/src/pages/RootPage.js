import { Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <h4>Loading...</h4>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
