import Image from 'next/image'
import Base from 'templates/Base'

import * as S from './styles'

const AboutUs = () => (
  <Base>
    <S.Cover>
      <Image src="/img/bg01.png" alt="Home background" layout="fill" />
    </S.Cover>

    <S.Heading>Termos de Uso</S.Heading>

    <S.SectionNews>
      <S.Text>
        <h2>
          <strong>RESUMO</strong>
        </h2>
      </S.Text>
      <S.Text>
        Este Termo de Uso disciplina as condições para uso dos recursos da
        Plataforma Start. Caso você não concorde com qualquer dos termos e
        condições aplicáveis, não finalize seu cadastro e não utilize os
        serviços. A finalização do cadastro e o início do uso da Plataforma
        Start significará a sujeição e a aceitação tácita de todos os termos e
        condições aqui previstos.
      </S.Text>
      <S.Text>
        1) A Plataforma Start oferece soluções destinadas a contadores e/ou
        empresas por meio de ferramentas que podem ser contratadas em conjunto
        ou separadamente, conforme planos e condições específicas;
      </S.Text>
      <S.Text>
        2) O Usuário deve realizar seu cadastro com informações exatas e
        verdadeiras e utilizar a Plataforma Start unicamente para fins lícitos e
        de acordo com este Termo de Uso, respondendo por seus atos que infrinjam
        a lei e causem prejuízo a terceiros;
      </S.Text>
      <S.Text>
        3) A Plataforma Start pode oferecer produtos e serviços de parceiros
        para contratação direta pelo Usuário, sendo a Start isento de
        responsabilidade nessa relação entre Usuário e parceiro;
      </S.Text>
      <S.Text>
        4) A Start emprega as melhores práticas de privacidade e proteção de
        dados, nos termos da Lei n. 13.709/18 e demais disposições da legislação
        em vigor, mas cabe ao Usuário conhecer a Política de Privacidade da
        Plataforma Start, adequar sua estrutura e operações de tratamento de
        dados pessoais aos ditames da legislação referenciada, adotar medidas
        técnicas, organizacionais e de segurança da informação para a proteção
        de dados pessoais, zelar pela proteção e alteração periódica de sua
        senha de acesso bem como controlar o acesso que concede a terceiros por
        meio da gestão de identidades dentro da Plataforma Start.
        <b>TERMOS E CONDIÇÕES GERAIS DE USO DE SOFTWARE - PLATAFORMA Start</b>
      </S.Text>
      <S.Text>
        <b>Start SOFTWARES E CURSOS LTDA.</b>, pessoa jurídica de direito
        privado, com sede na Praça Pio X, 12o andar, na cidade do Rio de
        Janeiro/RJ, inscrita no CNPJ/MF sob nº 11.325.614/0001-60, única e
        exclusiva proprietária e titular dos direitos sobre o software
        denominado “PLATAFORMA START”, doravante denominada simplesmente Start,
        estabelece o presente instrumento, denominado TERMO DE USO, conforme as
        condições ora previstas.
      </S.Text>
      <S.Text>
        <h2>
          <strong>1. ADESÃO AO TERMO E DEFINIÇÕES</strong>
        </h2>
      </S.Text>
      <S.Text>
        1.1. O USUÁRIO da PLATAFORMA Start tem ciência e concorda que o acesso
        e/ou uso da PLATAFORMA Start implica em integral concordância com os
        termos aqui previstos, pelo que automaticamente adere, e concorda em se
        submeter integralmente às condições gerais do presente TERMO DE USO e
        suas alterações posteriores, e demais políticas e princípios que o
        regem, inclusive a Política de Privacidade disponível em
        https://escolastart.plus
      </S.Text>
    </S.SectionNews>
  </Base>
)

export default AboutUs
