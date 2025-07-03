import { useTranslation } from "@/shared/locales";
import { useEffect, useState } from "react";
import { resources } from "@/shared/locales/languages";
import { IProject } from "../../domain/IProject";

export const useProjects = () => {
  const { currentLanguage } = useTranslation();

  const [projects, setProjects] = useState([] as IProject[]);

  const projectsByLanguage: Record<keyof typeof resources, IProject[]> = {
    ptBr: [
      {
        title: "My Geladeira",
        description: "Uma iniciativa sustentável que ajuda pessoas a gerenciarem os alimentos da geladeira com inteligência artificial. O projeto foi inicialmente disponibilizado em nuvem (Azure), contudo  por uma questão de tempo, não houve validação com usuários reais. Foi realizado como TCC do meu MBA em Engenharia de Software.",
        desingLink: "https://www.figma.com/design/20WiouJjZFkBQgxzu7er18/Mockup?node-id=2-2&p=f&t=p3qR9CCMc4liUuJ2-0",
        publishedLink: "http://mygeladeira.com.br/auth/login",
        repoBackEndLink: "https://github.com/ianer-glitch/MyGeladeiraRemixBackend",
        repoFrontEndLink: "https://github.com/ianer-glitch/MyGeladeiraRemixFrontend",
        tecnologies: ["Angular", ".Net","OpenAi", "Docker", "Mobile First", "Atomic Design", "Hexagonal", "Microsserviços", "Command Pattern"],
        imageSrc: "/images/my-geladeira-remix-logo.svg"
      },
      {
        title: "Who Am I Book",
        description: "O site que vocÊ esta agora!. Ele foi criado para exercitar minhas habilidades em Next de forma criativa. O site é inspirado em uma folha de caderno para se diferenciar de outros portfólios e refletir minha personalidade como desenvolvedor",
        publishedLink: "https://www.ianrepkermalavazi.com.br/",
        repoFrontEndLink: "https://github.com/ianer-glitch/who-am-i-book",
        desingLink:"https://www.figma.com/design/HDbk5avgClHglCQA9tffaG/WhoAmIBook?node-id=0-1&p=f&t=jkOK6pQB23cwW1zB-0",
        tecnologies: ["NextJs", "React","Zustand", "Tailwind","react-i18next","Atomic Design","Feature Based Architecture","Hooks","Presentation Layer","Business Layer"]
      },
      {
        title: "Re Qr Code Card",
        description: "Uma aplicação front-end simples em Next, a qual faz o  consome uma API externa  para gerar códigos QR. A exibição é interativa , com animações que seguem o movimento do mouse e  giroscópio dos celulares.",
        publishedLink: "https://qr-code.ianrepkermalavazi.com.br/",
        repoFrontEndLink: "https://github.com/ianer-glitch/ReQrCodeCard",
        tecnologies: ["NextJs", "React", "Zustand", "React Hook Form", "Axios", "react-i18next","Service Layer"],
        imageSrc: "/images/re-qr-code-image.png"
      },
      {
        title: "Vamos Rachar",
        description: "Uma iniciativa para divisão de contas entre amigos, conta com histórico e criação de comprovantes. Esse projeto foi idealizado, o back-end teve um desenvolvimento inicial, contudo não foi concluído por falta de tempo",
        repoBackEndLink: "https://github.com/ianer-glitch/VamosRacharService",
        desingLink: "https://www.figma.com/design/zA8zSMNVcipWsQ1nnBE5z7/VamosRachar?t=6prlfecutbH7UFfB-0",
        tecnologies: [".Net", "Microsserviços", "RabbitMq", "Docker"],
        imageSrc: "/images/vamos-rachar-logo.svg"
      },
      {
        title: "Who Am I Project",
        description: "Primeiro portfólio feito por mim. Um front-end desenvolvido para apresentar projetos e tecnologias de forma moderna.",
        repoFrontEndLink: "https://github.com/ianer-glitch/WhoAmIProject",
        desingLink: "https://www.figma.com/design/T3sqE6aymVGQc79ZYFQMT3/WhoAmIProject?node-id=0-1&p=f&t=6prlfecutbH7UFfB-0",
        tecnologies: ["Vue.js", "Docker", "Mobile First"],
        imageSrc: "/images/who-am-i-logo.svg"
      },
      {
        title: "Docker Vue Template",
        description: "Template para o uso de docker no desenvolvimento de aplicações Vue.js, o qual elimina a necessidade de instalar o Node.js localmente .Dessa forma, ambientes corporativos com diversos projetos e versões de Node teriam um gerenciamento simplificado. Infelizmente, é um método que funciona apenas se o sistema operacional do container for o mesmo da máquina host, devido ao compartilhamento da pasta node_modules, a qual contém dependências que variam de acordo com o sistema operacional.",
        repoFrontEndLink: "https://github.com/ianer-glitch/docker-vue-template",
        tecnologies: ["Vue.js", "Docker"],
        imageSrc: "/images/docker-vue-template-logo.png"
      }
    ],


    enUs: [
      {
        title: "My Geladeira",
        description: "A sustainable website that helps people manage their refrigerator food using artificial intelligence. The project was initially deployed in the cloud (Azure). Unfortunately, due to a lack of time, it was not possible to validate the solution with real users. This project was developed as a final assignment for my MBA in Software Engineering. ",
        desingLink: "https://www.figma.com/design/20WiouJjZFkBQgxzu7er18/Mockup?node-id=2-2&p=f&t=p3qR9CCMc4liUuJ2-0",
        publishedLink: "http://mygeladeira.com.br/auth/login",
        repoBackEndLink: "https://github.com/ianer-glitch/MyGeladeiraRemixBackend",
        repoFrontEndLink: "https://github.com/ianer-glitch/MyGeladeiraRemixFrontend",
        tecnologies: ["Angular", ".Net","OpenAi", "Docker", "Mobile First", "Atomic Design", "Hexagonal", "Microsservices", "Command Pattern"],
        imageSrc: "/images/my-geladeira-remix-logo.svg"
      },
      {
        title: "Who Am I Book",
        description: "This site you are currently on! It was created for increase my Next abilities in a creative way. This project was inspired by a book, looking for a different approach to show projects and my personality as a developer.",
        publishedLink: "https://www.ianrepkermalavazi.com.br/",
        repoFrontEndLink: "https://github.com/ianer-glitch/who-am-i-book",
        desingLink:"https://www.figma.com/design/HDbk5avgClHglCQA9tffaG/WhoAmIBook?node-id=0-1&p=f&t=jkOK6pQB23cwW1zB-0",
        tecnologies: ["NextJs", "React","Zustand", "Tailwind","react-i18next","Atomic Design","Feature Based Architecture","Hooks","Presentation Layer","Business Layer"]
      },
      {
        title: "Re Qr Code Card",
        description: "A simple front-end in Next.js that consumes an external API to generate a QR code image. The QR code view is interactive, featuring animations that follow the mouse cursor and respond to smartphone gyroscopic movements.",
        publishedLink: "https://qr-code.ianrepkermalavazi.com.br/",
        repoFrontEndLink: "https://github.com/ianer-glitch/ReQrCodeCard",
        tecnologies: ["NextJs", "React", "Zustand", "React Hook Form", "Axios", "react-i18next","Service Layer"],
        imageSrc: "/images/re-qr-code-image.png"
      },
      {
        title: "Vamos Rachar",
        description: "An initiative to help friends split bills. The platform includes features such as bill splitting, payment history, and exportable receipts. This project was conceptualized, but due to lack of time, only the initial back-end was developed.",
        repoBackEndLink: "https://github.com/ianer-glitch/VamosRacharService",
        desingLink: "https://www.figma.com/design/zA8zSMNVcipWsQ1nnBE5z7/VamosRachar?t=6prlfecutbH7UFfB-0",
        tecnologies: [".Net", "Microsservices", "RabbitMq", "Docker"],
        imageSrc: "/images/vamos-rachar-logo.svg"
      },
       {
        title: "Who Am I Project",
        description: "My first portfolio.  A Vue.js Front-end developed to show my experiences and projects in a modern way .",
        repoFrontEndLink: "https://github.com/ianer-glitch/WhoAmIProject",
        desingLink: "https://www.figma.com/design/T3sqE6aymVGQc79ZYFQMT3/WhoAmIProject?node-id=0-1&p=f&t=6prlfecutbH7UFfB-0",
        tecnologies: ["Vue.js", "Docker", "Mobile First"],
        imageSrc: "/images/who-am-i-logo.svg"
      },
       {
        title: "Docker Vue Template",
        description: "A template for using Docker while developing Vue.js applications, eliminating the need to install Node.js locally. This approach helps manage environments where multiple Node.js versions are used across a team. However, it only works reliably when the host machine shares the same operating system as the container, due to OS-specific node_modules dependencies. ",
        repoFrontEndLink: "https://github.com/ianer-glitch/docker-vue-template",
        tecnologies: ["Vue.js", "Docker"],
        imageSrc: "/images/docker-vue-template-logo.png"
      }
    ],
  };

  useEffect(() => {
    setProjects(projectsByLanguage[currentLanguage]);
  }, [currentLanguage]);

  return { projects };
};
