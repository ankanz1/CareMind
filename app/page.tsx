"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MessageCircle,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Globe,
  AlertTriangle,
  FileText,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Sparkles,
  Heart,
  Activity,
  Play,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [prompt, setPrompt] = useState("")

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Primary Care Physician",
      content:
        "CareMind AI has transformed how I connect with patients. The AI provides excellent preliminary assessments that help me focus on what matters most.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Patient",
      content:
        "Having 24/7 access to health guidance has been life-changing. CareMind AI caught early warning signs that led to timely treatment.",
      rating: 5,
    },
    {
      name: "Dr. James Wilson",
      role: "Cardiologist",
      content:
        "The escalation system is seamless. When patients need specialist care, all the context is already there. It's incredibly efficient.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 max-w-7xl mx-auto">
        {/* Logo removed */}

        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Overview
          </a>
          <a href="#" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About CareMind
          </a>
        </div>

        <Button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white border-0 px-6 py-2 rounded-full">
          Get Started
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </nav>

      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full opacity-60" />
          </div>
        ))}
      </div>

      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full" key="spline-container">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-Y1IDIhVvTLHNNM55nzsWk8uW/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: "none", pointerEvents: "auto" }}
          />
        </div>
        {/* Content Over 3D Scene */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto min-h-screen flex items-center">
          <div className="w-1/2 text-left mt-20 md:mt-32">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Healthcare beyond{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                imagination
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-8">one prompt away.</h2>
            {/* Input Field */}
            <div className="max-w-2xl mb-8">
              <div className="relative">
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-orange-400 ml-4 mr-3" />
                  <Input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your health concern or ask a medical question..."
                    className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                  />
                  <Button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white border-0 rounded-full px-6 py-2 ml-2">
                    Generate
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* End Hero Section */}


      </section>

      {/* How It Works */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four simple steps to transform your healthcare experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Onboarding",
                desc: "Complete your health profile with our intelligent questionnaire",
              },
              {
                icon: MessageCircle,
                title: "AI Sessions",
                desc: "Chat or speak with your AI health assistant anytime, anywhere",
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                desc: "Monitor your health metrics and receive personalized insights",
              },
              {
                icon: Users,
                title: "Doctor Escalation",
                desc: "Seamless handoff to healthcare professionals when needed",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group hover:border-purple-500"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI capabilities designed for comprehensive healthcare support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Multilingual Support",
                desc: "Communicate in your preferred language with global accessibility",
              },
              {
                icon: Clock,
                title: "24/7 AI Chat & Voice",
                desc: "Round-the-clock availability with both text and voice interactions",
              },
              {
                icon: AlertTriangle,
                title: "Risk Detection",
                desc: "Early warning system for potential health concerns",
              },
              { icon: Shield, title: "Privacy & Security", desc: "HIPAA-compliant with end-to-end encryption" },
              {
                icon: FileText,
                title: "Progress Reports",
                desc: "Detailed health analytics and personalized recommendations",
              },
              {
                icon: Activity,
                title: "Doctor Escalation",
                desc: "Intelligent routing to appropriate healthcare specialists",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 group hover:border-purple-500"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Market */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Transforming Healthcare Access</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Bridging the gap between patients and quality healthcare worldwide
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2.3B", label: "People lack healthcare access" },
              { number: "87%", label: "Faster initial assessments" },
              { number: "24/7", label: "Continuous monitoring" },
              { number: "40+", label: "Languages supported" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-gray-400">See what doctors and patients are saying about CareMind AI</p>
          </div>

          <div className="relative">
            <Card className="bg-gray-900 border-gray-800 shadow-lg">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-purple-500" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-gray-700 text-gray-400 hover:bg-gray-800 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible pricing options to meet your healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Freemium",
                price: "Free",
                period: "forever",
                features: ["Basic AI consultations", "Health tracking", "Community support", "Limited sessions"],
                popular: false,
              },
              {
                name: "Premium",
                price: "$29",
                period: "per month",
                features: [
                  "Unlimited AI sessions",
                  "Voice interactions",
                  "Priority support",
                  "Advanced analytics",
                  "Doctor escalation",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                features: [
                  "White-label solution",
                  "API access",
                  "Custom integrations",
                  "Dedicated support",
                  "Compliance tools",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 scale-105 border-purple-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-purple-600 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.price !== "Custom" && plan.price !== "Free" && (
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      )}
                      {plan.price === "Free" && <span className="text-gray-400 ml-2">{plan.period}</span>}
                      {plan.price === "Custom" && <span className="text-gray-400 ml-2">- {plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                    }`}
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Future of Care</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Experience healthcare that's always there for you. Start your journey with CareMind AI today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              {/* Logo and brand name removed from footer */}
              <p className="text-gray-400 mb-4">Revolutionizing healthcare with AI-powered virtual assistance.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    HIPAA Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 CareMind AI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
