let candidatoTeste = "aprovada";

switch (candidatoTeste) {
    case "aprovada":
        console.log("Parabens vc foi aprovada!!");
        break;
        case "reprovada":
            console.log("vc foi reprovada");
            break;
            case "lissta":
                console.log("vc está na lista de espera")
                break;

    default:
        console.log("não se aplica")
        break;
}