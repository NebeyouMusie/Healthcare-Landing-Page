export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">HealthCare Plus</h3>
            <p className="text-muted-foreground">
              Providing comprehensive healthcare services with compassion and excellence for over two decades.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  Primary Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  Specialist Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground">
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#cases" className="text-muted-foreground hover:text-foreground">
                  Patient Stories
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
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Patient Rights
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 HealthCare Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}