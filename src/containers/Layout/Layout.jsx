import classes from './Layout.module.scss';
import Title from '../../components/Title/Title';
import AccountData from '../../components/AccountData/AccountData';
import Divider from '../../components/UI/Divider/Divider';
import DocumentList from '../../components/DocumentStatistics/DocumentList/DocumentList';
import Subscription from '../../components/Subscription/Subscription';
import Teammates from '../../components/Teammates/Teammates';
import InternalEmail from '../../components/InternalEmail/InternalEmail';
import FaxNumber from '../../components/FaxNumber/FaxNumber';
import '../../assets/style/_global-style.scss';

function Layout() {
  return (
    <main className={classes.Layout} role="main">
      <Title/>
      <AccountData/>
      <Divider/>
      <DocumentList/>
      <Subscription/>
      <Teammates/>
      <Divider/>
      <InternalEmail/>
      <Divider/>
      <FaxNumber/>
    </main>
  );
}

export default Layout;