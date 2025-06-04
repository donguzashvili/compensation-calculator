import classes from "./Layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
