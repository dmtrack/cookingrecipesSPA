function Footer() {
    return (
        <>
            <footer className="page-footer #f0f4c3 lime lighten-5 ">
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
