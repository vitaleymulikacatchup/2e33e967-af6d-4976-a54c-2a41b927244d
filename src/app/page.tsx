"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Coffee, Facebook, Flame, Heart, HelpCircle, Instagram, Leaf, Mail, MessageSquare, Star, TrendingUp, Twitter, Users } from 'lucide-react';

const assetMap = [
  {
    id: "coffee-logo",
    url: "https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "BrewCraft Coffee Logo"
  },
  {
    id: "coffee-interior",
    url: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Modern coffee shop interior"
  },
  {
    id: "premium-beans",
    url: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Premium coffee beans"
  },
  {
    id: "brewing-equipment",
    url: "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Professional brewing equipment"
  },
  {
    id: "barista-craft",
    url: "https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Barista crafting coffee"
  },
  {
    id: "perfect-espresso",
    url: "https://images.pexels.com/photos/1752475/pexels-photo-1752475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Perfect espresso shot"
  }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="BrewCraft"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Exceptional Coffee Experience"
          description="Discover our carefully curated selection of premium coffee beans and expertly crafted beverages in a welcoming atmosphere"
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Explore Menu",
              href: "product"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern coffee shop interior"
            },
            {
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coffee beans"
            },
            {
              imageSrc: "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional brewing equipment"
            },
            {
              imageSrc: "https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Barista crafting coffee"
            },
            {
              imageSrc: "https://images.pexels.com/photos/1752475/pexels-photo-1752475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Perfect espresso shot"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Since 2018, we've been passionate about bringing you the finest coffee experience through carefully sourced beans and expert craftsmanship"
          tag="About Us"
          tagIcon={Heart}
          imagePosition="right"
          imageSrc="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Our coffee shop story"
          bulletPoints={[
            {
              title: "Premium Sourcing",
              description: "We partner directly with coffee farmers to ensure the highest quality beans",
              icon: Leaf
            },
            {
              title: "Expert Roasting",
              description: "Our master roasters craft each blend to perfection",
              icon: Flame
            },
            {
              title: "Artisan Brewing",
              description: "Every cup is prepared with precision and care by our skilled baristas",
              icon: Award
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="What Makes Us Special"
          description="Discover the features that set our coffee experience apart from the rest"
          tag="Our Features"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Single Origin Beans",
              description: "Carefully selected beans from specific regions, each with unique flavor profiles and characteristics",
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Single origin coffee beans"
            },
            {
              id: "02",
              title: "Professional Equipment",
              description: "State-of-the-art brewing equipment to ensure consistency and quality in every cup",
              imageSrc: "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional coffee brewing equipment"
            },
            {
              id: "03",
              title: "Expert Baristas",
              description: "Our trained baristas bring years of experience and passion to every drink they craft",
              imageSrc: "https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Expert barista at work"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Signature Drinks"
          description="Explore our carefully crafted selection of coffee beverages"
          tag="Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "espresso",
              name: "Award-Winning Classic Espresso",
              price: "$3.50",
              imageSrc: "https://images.pexels.com/photos/1752475/pexels-photo-1752475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic espresso shot"
            },
            {
              id: "cappuccino",
              name: "Premium Artisan Cappuccino",
              price: "$4.75",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "cold-brew",
              name: "Signature Cold Brew Special",
              price: "$4.25",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Coffee by the Numbers"
          description="See how we're brewing success one cup at a time"
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Coffee,
              title: "Cups Served",
              value: "50,000+"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Customers",
              value: "2,500+"
            },
            {
              id: "3",
              icon: Award,
              title: "Premium Blends",
              value: "25+"
            },
            {
              id: "4",
              icon: Heart,
              title: "Years of Passion",
              value: "7+"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from our valued coffee enthusiasts"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              company: "Local Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Software Engineer",
              company: "InnovateTech",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/15938260/pexels-photo-15938260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee and services"
          tag="Help"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee shop atmosphere"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are our opening hours?",
              content: "We're open Monday through Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM. Holiday hours may vary."
            },
            {
              id: "2",
              title: "Do you offer coffee subscription services?",
              content: "Yes! We offer monthly coffee subscriptions with freshly roasted beans delivered to your door. Choose from our signature blends or seasonal specials."
            },
            {
              id: "3",
              title: "Can you accommodate dietary restrictions?",
              content: "Absolutely! We offer dairy-free milk alternatives including oat, almond, and coconut milk. We also have sugar-free syrups and gluten-free pastries available."
            },
            {
              id: "4",
              title: "Do you host private events?",
              content: "Yes, we can host private events for groups of up to 30 people. Contact us to discuss your event needs and we'll create a customized experience."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join Our Coffee Community"
          description="Subscribe to our newsletter for exclusive updates on new blends, special events, and coffee brewing tips"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="BrewCraft"
          copyrightText="© 2025 BrewCraft Coffee. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee",
                  href: "product"
                },
                {
                  label: "Pastries",
                  href: "product"
                },
                {
                  label: "Specialty Drinks",
                  href: "product"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Coffee Sourcing",
                  href: "about"
                },
                {
                  label: "Sustainability",
                  href: "about"
                }
              ]
            },
            {
              title: "Visit",
              items: [
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "faq"
                },
                {
                  label: "Events",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/brewcraft",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/brewcraft",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/brewcraft",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}