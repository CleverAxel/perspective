import styles from "./whoAreWe.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye, faHeart, faLocationDot, faChevronDown, faBook, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Accordion from "../../sharedComponents/accordion/accordion";

export default function Who_are_we(){
    return(
        <div>
            <section className={styles.mainContainer}>

                <div className={styles.containerTitle}>
                    <h2>Qui sommes-nous ?</h2>
                </div>

                
                <Accordion
                transitionInMs={350}
                button={<ButtonAccordion titleButton="Découvrez nos valeurs, notre mission et notre vision des choses."></ButtonAccordion>}
                content={
                    <>
                        <Description title={<h3>Notre vision des choses <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></h3>}
                        description={
                            <p>
                                L’association sans but lucratif Perspectives a pour but le développement d’activités sociales, pédagogiques, culturelles et économiques en vue de promouvoir l’emploi et de favoriser l’expression citoyenne.
                            </p>
                        }></Description>

                        <Description title={<h3>Notre mission <FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon></h3>}
                        description={
                            <>
                                <p>
                                    Elle travaille à la facilitation de l’accès à l’emploi pour les travailleurs inoccupés, à travers la dispense de formations pré-qualifiantes ou qualifiantes, d’activités d’intégration socioprofessionnelle et d’orientation.
                                </p>
                                <p>
                                    Elle développe également des actions d’éducation non-formelle ou informelle, visant une connaissance critique de la société, l’expression culturelle et une participation active à la vie sociale, économique et politique.
                                </p>
                            </>
                        }></Description>

                        <Description title={<h3>Nos valeurs <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></h3>}
                        description={
                            <ul>
                                <li>Le travail, en tant que facteur d’insertion sociale;</li>
                                <li>La citoyenneté, en tant que facteur de participation active à la vie en société;</li>
                                <li>Les valeurs d’un service d’intérêt général, dont les principes directeurs sont la continuité, l’adaptabilité, l’égalité et la gratuité.</li>
                            </ul>
                        }></Description>

                        <Description title={<h3>Notre positionnement <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></h3>}
                        description={
                            <>
                                <p>
                                Perspectives est un centre de formations pour demandeurs d’emploi, créé en 1984 et agréé par la Wallonie en tant qu’Organisme d’insertion socioprofessionnelle (OISP), Agence de placement et opérateur de formation du Plan mobilisateur des technologies de l’information et de la communication (PMTIC).
                                </p>
                                <p>
                                Les formations organisées se divisent en deux catégories :
                                </p>
                                <ul>
                                    <li>Les courtes (max. 4 mois) visent la redynamisation, la mise en place d’un projet professionnel et la confiance en soi ;</li>
                                    <li>Les longues (max. 9 mois) se basent sur des apprentissages techniques atypiques. Elles permettent d’acquérir des compétences professionnelles de base et mettent en situation réelle de travail, par un stage en entreprise notamment.</li>
                                </ul>
                                <p>L’asbl développe également des études et des projets innovants visant à répondre à l’évolution du marché de l’emploi à Flémalle et dans les environs, ainsi que des actions d’éducation permanente et de formations continues.</p>
                                <p>
                                En vue de réaliser ses objectifs, elle travaille en étroite collaboration avec les services publics ayant dans leurs compétences directes ou indirectes l’emploi ou la formation, ainsi qu’avec d’autres partenaires publics ou privés.
                                </p>
                            </>
                        }></Description>
                    </>
                }></Accordion>
                {/********************************/}
                <Accordion
                transitionInMs={500}
                button={<ButtonAccordion titleButton="Découvrez l'histoire de la création de l'A.S.B.L"></ButtonAccordion>}
                content={
                    <>
                        <Description
                        title={<h3>Notre petite histoire <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></h3>}
                        description={
                            <>
                            <p>
                                Créée le 2 février 1984, à l’initiative du Comité subrégional de l’Emploi de Liège, l’association sans but lucratif Perspectives & Développements a connu plusieurs étapes dans son évolution, avant de devenir un organisme d’insertion socioprofessionnelle reconnu.
                            </p>
                            <p>
                                Entre 1984 et 1990, après une étude préalable des besoins locaux, Perspectives, appelée à l’époque Perspectives et Développements, a mis sur pied plusieurs projets de formation pour un public peu qualifié.
                            </p>
                            <p>
                                Entre 1991 et 1994, l’asbl a essentiellement développé des activités liées à l’accueil de demandeurs d’emploi (recherche emploi) de manière individuelle et collective (module de redynamisation).
                            </p>
                            <p>
                                Depuis 1995, Perspectives & Développements, sous l’impulsion du pouvoir communal, a élargi le champ de ses activités afin d’intégrer l’aspect économique en collaborant avec les partenaires de la Région : les entreprises et le secteur public. Grâce à son action à ces deux niveaux, Perspectives & Développements, service de proximité, possède une vision privilégiée du marché de l’emploi dans le bassin de la Haute-Meuse.
                            </p>
                            <p>
                                Depuis le 1er janvier 1996, l’asbl est agrée par la Région Wallonne en tant qu’organisme d’Insertion SocioProfessionnelle (OISP). Ce cadre légal permet à l’asbl de proposer des actions pouvant aller de la resocialisation à la formation pré-qualifiante, en passant par la remise à niveau, l’orientation, l’accompagnement à la recherche d’un stage et, s’il y a lieu, l’accompagnement à la recherche d’un emploi.
                            </p>
                            <p>
                                En 2003, Perspectives & Développements organise, en collaboration avec l’ Agence locale pour l’emploi de Flémalle, une étude du profil des demandeurs d’emploi de longue durée domiciliés sur le territoire de la Commune. Cette étude à permis de réactualiser la connaissance des besoins en formation des demandeurs d’emploi et sert à l’élaboration de nouveaux modules, ciblés sur le public.
                            </p>
                            </>
                        }
                        ></Description>
                    </>
                }>
                </Accordion>

                <Accordion
                transitionInMs={200}
                button={<ButtonAccordion titleButton="Nos membres du conseil d'administration"></ButtonAccordion>}
                content={
                    <Description
                    title={<h3>Membres du conseil d’administration <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h3>}
                    description={
                        <>
                            <ul>
                                <li>Monsieur Marc SOMBREFFE – Président</li>
                                <li>Monsieur Marc LAFONTAINE – Administrateur délégué</li>
                                <li>Madame Catherine MEGALI – Administratrice, Echevine en charge de l’Emploi et de la Formation, Présidente du CPAS</li>
                                <li>Madame Fabienne DANTINE – Administratrice, Conseillère communale</li>
                                <li>Monsieur Jacky BRIAN – Administrateur</li>
                                <li>Monsieur Paul PORTIER – Administrateur</li>
                            </ul>
                        </>
                    }></Description>
                }></Accordion>

            </section>
        </div>
    )
}

function Description(props:PropsDescription){
    return(
        <div className={styles.containerDescription}>
            <div className={styles.containerSubTitle}>
                {props.title}
            </div>

            <div className={styles.containerParagraph}>
                {props.description}
            </div>
        </div>
    )
}

interface PropsDescription{
    title:JSX.Element,
    description:JSX.Element;
}

function ButtonAccordion(props:{titleButton:string}):JSX.Element{
    const [directArrow, setDirectArrow] = useState("arrowDown");

    const ChangeDirectionArrow = () =>{
        if(directArrow === "arrowDown"){
            setDirectArrow("arrowUp");
        }else{
            setDirectArrow("arrowDown")
        }
    }
    return (
        <button className={styles.buttonAccordion} onClick={() => ChangeDirectionArrow()}>
            {props.titleButton}
            <FontAwesomeIcon icon={faChevronDown} className={styles[directArrow]}></FontAwesomeIcon>
        </button>
    )
}