export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">WizardZ</h3>
            <p className="text-muted-foreground">
              Transforming businesses through digital innovation and strategic marketing solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  Content Strategy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#cases" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 WizardZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}