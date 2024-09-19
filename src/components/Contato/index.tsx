import { useFormik } from "formik"
import * as Yup from "yup"
import { FaWhatsapp } from "react-icons/fa"
import { MdAttachEmail } from "react-icons/md"

import { Container, Formulario, ButtonEmail, ButtonZap, Env, TextItem } from "./styles"
import { colors } from "../../styles/variaveis"

const Contato = () => {
    const validationSchema = Yup.object({
        nome: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        telefone: Yup.string().matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Telefone inválido').required('Telefone é obrigatório'),
        mensagem: Yup.string().required('Mensagem é obrigatória'),
        dataNascimento: Yup.string().required('Data de nascimento é obrigatória'),
        sexo: Yup.string().required('Sexo é obrigatório'),
        estadoCivel: Yup.string().required('Estado civil é obrigatório'),
        dataCasamento: Yup.string(),
        nomeConjugue: Yup.string(),
        nomePai: Yup.string().required('Nome do pai é obrigatório'),
        nomeMae: Yup.string().required('Nome da mãe é obrigatório'),
        rg: Yup.string().required('RG é obrigatório'),
        cpf: Yup.string().required('CPF é obrigatório'),
        cep: Yup.string().required('CEP é obrigatório'),
        endereco: Yup.string().required('Endereço é obrigatório'),
        numero: Yup.string().required('Número é obrigatório'),
        bairro: Yup.string().required('Bairro é obrigatório'),
        uf: Yup.string().required('UF é obrigatório'),
        cidade: Yup.string().required('Cidade é obrigatória'),
        dataBatismo: Yup.string(),
        dataOrdenacao: Yup.string(),
        escolaridade: Yup.string().required('Escolaridade é obrigatória'),
        batismoEspiritoSanto: Yup.string().required('esse campo é obrigatório'),
    })

    const formik = useFormik({
        initialValues: {
            nome: '',
            dataNascimento: '',
            sexo: '',
            estadoCivel: '',
            dataCasamento: '',
            nomeConjugue: '',
            nomePai: '',
            nomeMae: '',
            rg: '',
            cpf: '',
            cep: '',
            endereco: '',
            numero: '',
            bairro: '',
            uf: '',
            cidade: '',
            dataBatismo: '',
            dataOrdenacao: '',
            escolaridade: '',
            batismoEspiritoSanto: '',
            email: "",
            telefone: "",
            mensagem: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const mailtoLink = `mailto:tiago.biazin02@gmail.com?subject=Contato de ${values.nome}&body=Nome: ${values.nome}%0AEmail: ${values.email}%0ATelefone: ${values.telefone}%0AMensagem: ${values.mensagem}`
            window.location.href = mailtoLink
        }
    })

    const handleSubmitWhatsApp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!formik.isValid) {
            formik.setTouched({
            nome: true,
            dataNascimento: true,
            sexo: true,
            estadoCivel: true,
            dataCasamento: true,
            nomeConjugue: true,
            nomePai: true,
            nomeMae: true,
            rg: true,
            cpf: true,
            cep: true,
            endereco: true,
            numero: true,
            bairro: true,
            uf: true,
            cidade: true,
            dataBatismo: true,
            dataOrdenacao: true,
            escolaridade: true,
            batismoEspiritoSanto: true,
            email: true,
            telefone: true,
            mensagem: true
            })
            return
        }
        const whatsappLink = `https://api.whatsapp.com/send?phone=5517981716648&text=Nome: ${formik.values.nome}
        %0AData de nascimento: ${formik.values.dataNascimento}
        %0AEstado Civel: ${formik.values.estadoCivel}
        %0AData de Casamento: ${formik.values.dataCasamento}
        %0ANome do Conjugue: ${formik.values.nomeConjugue}
        %0ANome do Pai: ${formik.values.nomePai}
        %0ANome do Mãe: ${formik.values.nomeMae}
        %0ARG: ${formik.values.rg}
        %0ACPF: ${formik.values.cpf}
        %0ACEP: ${formik.values.cep}
        %0AEndereço: ${formik.values.endereco}
        %0ANúmero: ${formik.values.numero}
        %0ABairro: ${formik.values.bairro}
        %0AEstado: ${formik.values.uf}
        %0ACidade: ${formik.values.cidade}
        %0AData de Batismo: ${formik.values.dataBatismo}
        %0AData de Consagração: ${formik.values.dataOrdenacao}
        %0ACEP: ${formik.values.cep}
        %0AEscolaridade: ${formik.values.escolaridade}
        %0ABatizado com Espírito Santo?: ${formik.values.batismoEspiritoSanto}
        %0AEmail: ${formik.values.email}
        %0ATelefone: ${formik.values.telefone}
        %0AMensagem: ${formik.values.mensagem}`
        window.open(whatsappLink, "_blank")
    }

    return (
        <>
        <TextItem>Cadastro membros AD Brás São Bernardo do Campo - Santa Fé do Sul - SP</TextItem>
        <Container>
            <Formulario>
            <form onSubmit={formik.handleSubmit}>
                <ul>
                    <li>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome:"
                            value={formik.values.nome}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.nome && formik.errors.nome ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.nome}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="text"
                            name="dataNascimento"
                            placeholder="Data de nascimento:"
                            value={formik.values.dataNascimento}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.dataNascimento}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="text"
                            name="sexo"
                            placeholder="Sexo:"
                            value={formik.values.sexo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.sexo && formik.errors.sexo ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.sexo}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="text"
                            name="estadoCivel"
                            placeholder="Estado Civel:"
                            value={formik.values.estadoCivel}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.estadoCivel && formik.errors.estadoCivel ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.estadoCivel}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="text"
                            name="dataCasamento"
                            placeholder="Data de Casamento:"
                            value={formik.values.dataCasamento}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.dataCasamento && formik.errors.dataCasamento ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.dataCasamento}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="nomeConjugue"
                            placeholder="Nome do Conjugue:"
                            value={formik.values.nomeConjugue}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.nomeConjugue && formik.errors.nomeConjugue ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.nomeConjugue}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="nomePai"
                            placeholder="Nome do Pai:"
                            value={formik.values.nomePai}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.nomePai && formik.errors.nomePai ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.nomePai}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="nomeMae"
                            placeholder="Nome da Mãe:"
                            value={formik.values.nomeMae}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.nomeMae && formik.errors.nomeMae ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.nomeMae}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="rg"
                            placeholder="RG:"
                            value={formik.values.rg}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.rg && formik.errors.rg ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.rg}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="cpf"
                            placeholder="CPF:"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.cpf && formik.errors.cpf ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.cpf}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="cep"
                            placeholder="CEP:"
                            value={formik.values.cep}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.cep && formik.errors.cep ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.cpf}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="endereco"
                            placeholder="Endereço:"
                            value={formik.values.endereco}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.endereco && formik.errors.endereco ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.endereco}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="numero"
                            placeholder="Número:"
                            value={formik.values.numero}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.numero && formik.errors.numero ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.numero}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="bairro"
                            placeholder="Bairro:"
                            value={formik.values.bairro}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.bairro && formik.errors.bairro ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.bairro}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="uf"
                            placeholder="UF:"
                            value={formik.values.uf}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.uf && formik.errors.uf ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.bairro}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade:"
                            value={formik.values.cidade}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.cidade && formik.errors.cidade ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.bairro}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="dataBatismo"
                            placeholder="Data do Batismo:"
                            value={formik.values.dataBatismo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.dataBatismo && formik.errors.dataBatismo ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.dataBatismo}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="dataOrdenacao"
                            placeholder="Data da Consagração:"
                            value={formik.values.dataOrdenacao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.dataOrdenacao && formik.errors.dataOrdenacao ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.dataOrdenacao}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="escolaridade"
                            placeholder="Escolaridade:"
                            value={formik.values.escolaridade}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.escolaridade && formik.errors.escolaridade ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.escolaridade}</div>
                        ) : null}
                    </li>
                    <li>
                    <input
                            type="text"
                            name="batismoEspiritoSanto:"
                            placeholder="Batizado com Espírito Santo?"
                            value={formik.values.batismoEspiritoSanto}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.batismoEspiritoSanto && formik.errors.batismoEspiritoSanto ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.batismoEspiritoSanto}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail:"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.email}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Telefone:"
                            value={formik.values.telefone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.telefone && formik.errors.telefone ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.telefone}</div>
                        ) : null}
                    </li>
                    <li>
                        <textarea
                            name="mensagem"
                            placeholder="Mensagem:"
                            value={formik.values.mensagem}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.mensagem && formik.errors.mensagem ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.mensagem}</div>
                        ) : null}
                    </li>
                </ul>
                <Env>
                    <ButtonEmail type="submit">
                        <MdAttachEmail size={24} color={colors.people} />
                        Enviar
                    </ButtonEmail>
                    <ButtonZap onClick={handleSubmitWhatsApp}>
                        <FaWhatsapp size={24} color={colors.people} />
                        Enviar
                    </ButtonZap>
                </Env>
            </form>
            </Formulario>
        </Container>
        </>
    )
}

export default Contato
