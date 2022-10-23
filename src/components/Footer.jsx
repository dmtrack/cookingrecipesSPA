function Footer() {
  return (
    <>
      <footer className="page-footer #b9f6ca green accent-1 ">
        <div className="footer-copyright">
          <div
            className="container"
            style={{ textAlign: "center", color: "black" }}
          >
            © {new Date().getFullYear()} Copyright Text
          </div>
        </div>
      </footer>
    </>
  );
}
export { Footer };
