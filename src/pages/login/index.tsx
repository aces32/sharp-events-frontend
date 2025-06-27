import LoginSidebar from 'components/molecules/m-loginSidebar';
import HomeWrapper from 'hoc/home-wrapper';
import LoginAccount from 'components/molecules/m-login';

const Login = () => {
  return (
    <HomeWrapper>
      <div className="block h-screen w-full justify-between bg-[#F6F7F9] md:flex">
        <div className="hidden w-1/3 md:block">
          {' '}
          <LoginSidebar />
        </div>
        <div className=" h-full w-full md:w-2/3">
          <LoginAccount />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Login;
