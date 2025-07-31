import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, LinkedinIcon, MapPin, Code, Database, Smartphone, Network } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Daarain Kazi</h1>
          <h2 className="text-2xl text-primary font-semibold mb-6">Computer Engineer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Motivated computer engineering undergraduate with a strong foundation in programming, systems design, and problem-solving. 
            Eager to launch a career in IT, bringing hands-on academic experience with technologies such as software development, 
            networking, and algorithms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild>
              <a href="mailto:daarainkazi@gmail.com">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/daarain-kazi/" target="_blank" rel="noopener noreferrer">
                View LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Professional Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized for adaptability, teamwork, and effective communication skills developed through group projects and internships. 
                  Passionate about applying theoretical knowledge to real-world challenges and continuously learning new technologies 
                  to contribute to a dynamic IT team.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Current Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mobile app developer with experience in computer hardware and networking, currently pursuing data science 
                  to expand my skill set and stay at the forefront of technology innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Software Development</h4>
                <p className="text-sm text-muted-foreground">Programming & Systems Design</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Mobile Development</h4>
                <p className="text-sm text-muted-foreground">App Development</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Network className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Networking</h4>
                <p className="text-sm text-muted-foreground">Hardware & Networking</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Data Science</h4>
                <p className="text-sm text-muted-foreground">Currently Pursuing</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold mb-6">Technical Competencies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary">Programming</Badge>
              <Badge variant="secondary">Systems Design</Badge>
              <Badge variant="secondary">Problem Solving</Badge>
              <Badge variant="secondary">Algorithms</Badge>
              <Badge variant="secondary">Teamwork</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="secondary">Adaptability</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Get In Touch</h3>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out for opportunities or collaborations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:daarainkazi@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    daarainkazi@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:9987888370" className="text-foreground hover:text-primary transition-colors">
                    +91 9987888370
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/daarain-kazi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 Daarain Kazi. Ready to contribute to innovative IT solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
