import { BiographyContainer } from "./styles";
import fotoPerfil from "../../assets/fotoPerfil.png.png";
import { TypeAnimation } from "react-type-animation";



export function Biography() {
  return (
    <BiographyContainer>
      <h1>
        <TypeAnimation
          sequence={[
            "Um pouco sobre mim",
            "Caio Henrique Moraes!",
          ]}
          speed={10}
          
        ></TypeAnimation>
      </h1>
      <p>
        Olá! Meu nome é Caio Henrique de Moraes Gonçalves e tenho 30 anos. Minha
        trajetória profissional sempre esteve ligada ao comércio, principalmente
        na área de pet shops. Trabalhei por muitos anos como tosador e também
        fui gerente de uma hamburgueria por um tempo. No entanto, há quase um
        ano, decidi dar uma guinada na minha carreira e me aventurar no mundo da
        programação. Desde então, tenho me dedicado cada vez mais a aprender
        sobre tecnologia e estou me apaixonando mais a cada dia. Comecei fazendo
        alguns cursos básicos de HTML e CSS, como o curso do Curso em Vídeo, e
        depois me aprimorei mais no curso da Onibitcode. Aprendi também um pouco
        de JavaScript e fiz um curso completo dessa linguagem na Udemy.
        Atualmente, estou fazendo um curso completo de desenvolvimento web na
        trilha Ignite da Escola Rocketseat. Estou muito animado com todas as
        possibilidades que a programação pode oferecer e espero poder contribuir
        para o desenvolvimento de soluções inovadoras no futuro.
        <img src={fotoPerfil} />
      </p>
    </BiographyContainer>
  );
}
