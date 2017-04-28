import * as Routes from '../routes/Routes';

const Layout = (props) => (
  <div id="lwjgl-routes">
    <Match exactly={true} pattern="/" component={Routes.Home} />
    <Match exactly={true} pattern="/download" component={Routes.Download} />
    <Match exactly={true} pattern="/guide" component={Routes.Guide} />
    <Match exactly={true} pattern="/source" component={Routes.Source} />
    <Match exactly={true} pattern="/license" component={Routes.License} />
  </div>
);

export default Layout;