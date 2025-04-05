
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle2, Clock, Heart, Target } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Amadou Konaté",
      role: "Fondateur & Chercheur en IA",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "Spécialiste en traitement automatique des langues avec focus sur les langues africaines."
    },
    {
      name: "Fatoumata Traoré",
      role: "Directrice de Recherche",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Docteure en informatique spécialisée dans l'apprentissage profond et les modèles de langage."
    },
    {
      name: "Ibrahim Diallo",
      role: "Ingénieur Logiciel",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Développeur full-stack avec expertise en applications web et mobiles pour l'accessibilité."
    },
    {
      name: "Aïssata Coulibaly",
      role: "Linguiste",
      image: "https://i.pravatar.cc/300?img=10",
      bio: "Spécialiste des langues maliennes avec focus sur le bambara et le fulfuldé."
    },
    {
      name: "Oumar Touré",
      role: "Développeur IA",
      image: "https://i.pravatar.cc/300?img=4",
      bio: "Expert en machine learning et systèmes de reconnaissance vocale."
    },
    {
      name: "Mariam Sanogo",
      role: "Gestionnaire de projet",
      image: "https://i.pravatar.cc/300?img=9",
      bio: "Coordinatrice des initiatives et de l'engagement communautaire."
    }
  ];

  return (
    <Layout>
      <div className="relative bg-maliba-blue/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              À propos de MALIBA-AI
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              MALIBA-AI est née d'une vision simple mais ambitieuse : rendre l'intelligence artificielle accessible et utile à tous les Maliens.
            </p>
            <p className="text-lg text-gray-600">
              Notre nom combine "Mali Ba" (Grand Mali) et "IA" (Intelligence Artificielle), symbolisant notre engagement à développer des solutions technologiques adaptées aux besoins spécifiques du Mali.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Notre philosophie"
            subtitle="MALIBA-AI s'appuie sur des valeurs fortes pour guider ses actions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-maliba-ocre/10 flex items-center justify-center text-maliba-ocre mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Source</h3>
              <p className="text-gray-600">
                Nous croyons que le partage de la connaissance et des ressources est essentiel pour le développement de l'IA inclusive. 
                Tous nos projets sont open source, permettant à chacun de contribuer et d'améliorer nos solutions.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-maliba-blue/10 flex items-center justify-center text-maliba-blue mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Communauté</h3>
              <p className="text-gray-600">
                MALIBA-AI est avant tout une initiative communautaire. Nous valorisons la diversité des compétences 
                et encourageons chacun à apporter sa pierre à l'édifice, quelle que soit son expertise.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-maliba-green/10 flex items-center justify-center text-maliba-green mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact local</h3>
              <p className="text-gray-600">
                Notre priorité est de développer des solutions qui répondent aux défis spécifiques du Mali et qui 
                apportent une valeur ajoutée concrète à la vie quotidienne des Maliens.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Nos objectifs"
                subtitle="MALIBA-AI vise à transformer le paysage technologique du Mali"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-maliba-ocre text-white flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Démocratiser l'accès à l'IA</h3>
                    <p className="text-gray-600">
                      Rendre les technologies d'IA accessibles à tous les Maliens, indépendamment de leur niveau d'éducation ou de leur langue maternelle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-maliba-ocre text-white flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Préserver et valoriser les langues maliennes</h3>
                    <p className="text-gray-600">
                      Développer des modèles linguistiques pour les langues locales, contribuant ainsi à leur préservation et à leur promotion à l'ère numérique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-maliba-ocre text-white flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Créer un écosystème d'innovation</h3>
                    <p className="text-gray-600">
                      Établir une communauté dynamique de chercheurs, développeurs et utilisateurs travaillant ensemble à résoudre les défis locaux grâce à l'IA.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-maliba-ocre text-white flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Former la prochaine génération</h3>
                    <p className="text-gray-600">
                      Éduquer et former les jeunes Maliens aux technologies d'IA, favorisant ainsi l'émergence d'une expertise locale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format" 
                alt="Technology" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-bold">
                  Construire ensemble l'avenir technologique du Mali
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Notre équipe"
            subtitle="Des experts passionnés qui travaillent ensemble pour réaliser la vision de MALIBA-AI"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-maliba-ocre mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-maliba-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Notre vision pour l'avenir
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              MALIBA-AI aspire à faire du Mali un leader régional dans le développement de solutions d'IA adaptées au contexte africain, 
              contribuant ainsi au développement socio-économique du pays.
            </p>
            
            <div className="flex items-center justify-center">
              <Clock className="h-8 w-8 mr-3" />
              <span className="text-2xl font-semibold">Horizon 2030</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
