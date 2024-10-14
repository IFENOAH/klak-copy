import { randomId } from "../../../helpers/random-id"

export const PrivacyPolicy = () => {

    const contentNav = [
        {
            id: randomId(),
            title: "Introduction/Scope",
            num: "1",
            hash: "intro"
        },
        {
            id: randomId(),
            title: "Roles/Responsibilities",
            num: "2",
            hash: "roles"
        },
        {
            id: randomId(),
            title: "Policy Statement",
            num: "3",
            hash: "policy"
        },
        {
            id: randomId(),
            title: "About Klak Technologies Limited",
            num: "3.1",
            hash: "about-klak"
        },
        {
            id: randomId(),
            title: "What Personal Data Do We Need",
            num: "3.2",
            hash: "personal-data"
        },
        {
            id: randomId(),
            title: "Why We Need the Data",
            num: "4",
            hash: "need-data"
        },
        {
            id: randomId(),
            title: " Use of Information for Marketing Purposes",
            num: "4.1",
            hash: "marketing-info"
        },
        {
            id: randomId(),
            title: "Legal Grounds for Processing",
            num: "5",
            hash: "legal-processing"
        },
        {
            id: randomId(),
            title: "Processing of Personal Data Based on Consent",
            num: "6",
            hash: "data-processing"
        },
        {
            id: randomId(),
            title: "Withdrawal of Consent",
            num: "6.1",
            hash: "consent-withdraw"
        },
        {
            id: randomId(),
            title: "Use of Cookies",
            num: "7",
            hash: "cookies"
        },
        {
            id: randomId(),
            title: "Disclosure to Third-Parties",
            num: "8",
            hash: "disclosure"
        },
        {
            id: randomId(),
            title: "Cross-Border Transfers",
            num: "8.1",
            hash: "cross-transfer"
        },
        {
            id: randomId(),
            title: "Retention of Records",
            num: "9",
            hash: "retention"
        },
        {
            id: randomId(),
            title: "Data Subject Rights",
            num: "10",
            hash: "data-rights"
        },
        {
            id: randomId(),
            title: "Complaints",
            num: "11",
            hash: "complaints"
        },
    ]

    const tableData = [
        {
            dataType: "Contact Data",
            description: `Address, Email Address, and Telephone Numbers Information received during your 
            contact with face-to-face meetings, phone calls, emails, letters, and SMS`
        },
        {
            dataType: "Financial Data",
            description: `Bank account information and bank statements, Bank Verification Number (BVN), 
            your income and outgoings, accounting/General Ledger information, your financial position, 
            status, and credit history, and account number.`
        },
        {
            dataType: "Transaction Data",
            description: `Information regarding the products and services you may have benefited from by 
            using Klak Technologies Limited, transactional information including in respect of products which you purchase.`
        },
        {
            dataType: "Technical Data",
            description: `Internet protocol (IP) address, your login data, details of your browser and operating system, 
            time zone setting and location, browser plug-in types and versions, platforms,
            and other technology on the devices you use to access this website`
        },
        {
            dataType: "Profile Data",
            description: `Includes your username and password`
        },
        {
            dataType: "Job Application Data",
            description: `Data submitted throughout the recruitment process eg: name, email address. 
            Any personal information you provide to Klak Technologies Limited as part of the recruitment process`
        },
        {
            dataType: "Usage Data",
            description: `Includes information about how you use our website, products and services`
        },
        {
            dataType: "Marketing and Communications Data",
            description: `Information about your communications with us. 
            Your preferences in receiving marketing e-mails from us 
            and consent you have given us`
        },
    ];

    const InfoTableData = [
        {
            dataType: "Account creation, identity verification, and maintenance of records",
            description: `Contract`
        },
        {
            dataType: "Customer validation/information processing",
            description: `Contract`
        },
        {
            dataType: "Employment",
            description: `Contract`
        },
    ];

    return (
        <div className="w-full flex gap-4">
            <div className="w-full xl:w-4/6 p-6 rounded-xl border border-[#EAEAEA] flex flex-col gap-6">
                <p className="text-sm text-primary-200 font-extrabold">Privacy Policy</p>

                <article className="flex flex-col gap-6">
                    <section className="flex flex-col gap-6">
                        <LegalItem
                            hash="intro"
                            indexing="1."
                            title="Introduction/Scope"
                            text={`This document is prepared in accordance with the provisions of the Nigeria Data Protection Act 2023 (NDPA). 
                                It sets out how Klak Technologies Limited applies and complies with the data privacy principles in processing 
                                the personal data of customers, visitors, staff, and even third parties that interact with Klak Technologies Limited. 
                                For personal data of individuals, this document also highlights their rights and covers the data subject(s) 
                                whose personal data is collected and processed, in compliance with the NDPA.
                                This privacy policy describes why and how we collect and use personal information about our customers, clients,
                                and visitors (data subjects). It also highlights with whom we might share Personal Information and how long 
                                we keep such information. It also makes data subjects aware of their rights under the Nigeria Data Protection Act 2023.

                            `}
                        />
                        <LegalItem
                            hash="roles"
                            indexing="2."
                            title="Roles/Responsibilities"
                            text={`Klak Technologies Limited Data Protection Officer (DPO) is responsible for 
                                ensuring that this document is correct and up-to-date. The DPO also ensures that 
                                data subjects are duly notified prior to the collection and processing of their 
                                personal data by Klak Technologies Limited including data collected via Klak Technologies Limited's website. 
                                All Klak Technologies Limited employees/staff who interact with personal data are also ensured to follow 
                                the provisions in this policy document.
                            `}
                        />
                        <LegalItem
                            hash="policy"
                            indexing="3."
                            title="Policy Statement"
                            text={`Klak Technologies Limited is committed to protecting the 
                                privacy and security of data subjects' personal data. We are responsible for determining 
                                how we hold and use personal information about our data subjects. 
                                According to the Nigeria Data Protection Act (NDPA), Klak Technologies Limited 
                                is required to notify data subjects of the information contained in this document.
                            `}
                        />
                        <LegalItem
                            hash="about-klak"
                            indexing="3.1."
                            title="About Klak Technologies Limited"
                            text={`Klak Technologies Limited is incorporated under the laws of the 
                                Federal Republic of Nigeria, with our office at no 16, block B, Idowu Martins, 
                                Victoria Island, Lagos. We provide financial technology services to businesses in Nigeria.
                            `}
                        />
                        <LegalItem
                            hash="personal-data"
                            indexing="3.2."
                            title="What Personal Data Do We Need?"
                            text={`The personal data we would collect and process, depending on the particular processing requirement, are under the following categories:`}
                            node={
                                <div className="flex flex-col gap-6">
                                    <table className="w-full table-fixed border-collapse border border-gray-400">
                                        <thead>
                                            <tr>
                                                <th className="w-1/2 p-4 border border-gray-400 bg-gray-100 text-left">Data Type</th>
                                                <th className="w-1/2 p-4 border border-gray-400 bg-gray-100 text-left">Description of Data</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="p-4 border border-gray-400">{item.dataType}</td>
                                                    <td className="p-4 border border-gray-400">{item.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                        Where the personal data we need to collect may fall under a special category of sensitive personal data,
                                        Klak Technologies Limited lawful basis of processing will be the explicit consent of the individual,
                                        or where applicable, compliance with a legal obligation, or for legal proceedings/advice.
                                    </article>

                                </div>
                            }
                        />
                        <LegalItem
                            hash="need-data"
                            indexing="4."
                            title="Why We Need the Data"
                            text={`Klak Technologies Limited ensures that the personal data collected and processed is necessary for collection, 
                                and shall not collect or process more data than is reasonably required for a particular processing activity.
                            `}
                        />
                        <LegalItem
                            hash="marketing-info"
                            indexing="4.1."
                            title="Use of Information for Marketing Purposes"
                            text={`In accordance with the Nigerian Data Protection Act 2023 and other applicable data protection regulations, 
                                we may utilize the personal information collected from you for marketing purposes. This includes but is not limited to, 
                                sending you promotional materials, updates on our services, and other communications that may be of interest to you.
                                We assure you that any marketing communications will be sent only if you have given your explicit consent to receive such information. 
                                You retain the right to withdraw your consent at any time by contacting us through the details provided in this Privacy Policy. 
                                The withdrawal of consent will not affect the legality of any data processing carried out before such withdrawal.
                                We are committed to ensuring that your personal data is processed in accordance with the highest standards of data protection and privacy.
                            `}
                        />
                        <LegalItem
                            hash="legal-processing"
                            indexing="5."
                            title="Legal Grounds for Processing"
                            text={`Klak Technologies Limited identifies, establishes, defines, and documents the specific
                                purpose of processing and the legal basis for processing personal data 
                                (including any special categories of personal data processed) before any 
                                processing operation takes place under:
                            `}
                            content={[
                                "Consent obtained from the data subject",
                                "Performance of a contract where the data subject is a party",
                                "Legal obligation that Klak Technologies Limited is required to meet",
                                "Protect the vital interests of the data subject, including the protection of rights and freedom of the Data Subject",
                                "Official authority of Klak Technologies Limited or to carry out the processing that is in the public interest",
                                "National laws such as biometric data"
                            ]}
                            node={
                                <div className="flex flex-col gap-6">
                                    <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                        In addition, every processing purpose has at least one lawful basis for processing to
                                        safeguard the rights of the data subjects, as listed below:
                                    </article>
                                    <table className="w-full table-fixed border-collapse border border-gray-400">
                                        <thead>
                                            <tr>
                                                <th className="w-1/2 p-4 border border-gray-400 bg-gray-100 text-left">Purpose of Processing</th>
                                                <th className="w-1/2 p-4 border border-gray-400 bg-gray-100 text-left">Lawful Basis of Processing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {InfoTableData.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="p-4 border border-gray-400">{item.dataType}</td>
                                                    <td className="p-4 border border-gray-400">{item.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            }
                        />
                        <LegalItem
                            hash="data-processing"
                            indexing="6."
                            title="Processing of Personal Data Based on Consent"
                            text={`Where applicable, Klak Technologies Limited will require the explicit consent of customers, visitors, 
                                and other relevant stakeholders to process collected personal data.
                                Visitors to Klak Technologies Limited website are expected to read and understand the 
                                website privacy notice, and then agree to the website’s terms of use. And by consenting to the privacy policy, 
                                data subjects are giving Klak Technologies Limited permission to use/process their personal data 
                                specifically for the purpose identified before collection.
                                On this ground, if any data subject (customer, client, visitor, staff, or third party) 
                                does not agree to Klak Technologies Limited collecting and processing their personal data, 
                                such individual is not allowed to enjoy Klak Technologies Limited service(s) where applicable.
                                If, for any reason, Klak Technologies Limited requests sensitive personal data from its stakeholders 
                                (external and internal), the individuals will be rightly notified of why and how the information will be used.
                                Where processing relates to a child under 18 years old, as in the case of NDPA, Klak Technologies 
                                Limited shall demonstrate that consent has been provided by the person who holds parental responsibility 
                                over the child. Klak Technologies Limited shall demonstrate that reasonable efforts have been made to 
                                verify the age of the child and establish the authenticity of the parental responsibility taking into consideration available technology.
                            `}
                        />
                        <LegalItem
                            hash="consent-withdraw"
                            indexing="6.1."
                            title=" Withdrawal of Consent"
                            text={`Irrespective of the initial consent given, an individual can withdraw their consent at any time by making a withdrawal of consent request.
                                Klak Technologies Limited demonstrates the data subject (customer, visitor, staff, or third party) 
                                has withdrawn consent to the processing of his or her personal data with a written instruction from the data subject.
                                For child consent, Klak Technologies Limited shall demonstrate that the holder of parental 
                                responsibility over the specified child has withdrawn consent via a written instruction from the parent. 
                                Klak Technologies Limited will also demonstrate that reasonable efforts have been made to 
                                establish the authenticity of the parental responsibility, when withdrawing consent for 
                                the specified child, considering available technology.
                                Where applicable, the Data Protection Officer will inform the relevant process owner of this 
                                change and the processing activities that relied upon the consent will be stopped immediately, 
                                in accordance with the relevant process.
                            `}
                        />
                        <LegalItem
                            hash="cookies"
                            indexing="7."
                            title="Use of Cookies"
                            text={`The website uses cookies provided by trusted third parties, such as Google Analytics, 
                                to help us understand and improve users' experience on the website.
                                Klak Technologies Limited may use the information we obtain from your use of our cookies to:
                            `}
                            content={[
                                "Recognize your computer when you visit our website",
                                "Track you as you navigate our website",
                                "Improve the website’s usability (including our Live Chat application to answer questions you have in real-time",
                                "Analyze the use of our website - such as how many people visit us each day, and",
                                "Manage the website"
                            ]}
                            node={
                                <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                    Users can disable cookies and prevent the setting of cookies by adjusting the settings on their browser.
                                    However, this is not recommended, as disabling cookies may also disable certain functionality and features of the site.
                                </article>
                            }
                        />
                        <LegalItem
                            hash="disclosure"
                            indexing="8."
                            title="Disclosure to Third-Parties"
                            text={`Aside from situations where Klak Technologies Limited may be required to disclose personal 
                                data of individuals in accordance with a legal obligation in response to requests by government 
                                authorities or law courts on matters involving national security or law enforcement requirements, 
                                Klak Technologies Limited will not pass on its data subjects’ personal data to third parties without first obtaining consent.
                                In situations where the processing of personal data will involve the investigation of potential 
                                violations of Klak Technologies Limited Terms of Service, fraud prevention/mitigation, security 
                                issues management, and the preservation of the rights and freedom of staff, customers, and clients,
                                Klak Technologies Limited shall establish an appropriate legal ground for such data transfers.
                                Klak Technologies Limited has put in place, to the best of its ability and in line with standard 
                                global practices, physical, technical, and organizational measures (including secure encryption 
                                and anonymization) to ensure the optimum protection of personal data, which also extends to data transferred or shared with third-parties.

                            `}
                        />
                        <LegalItem
                            hash="cross-transfer"
                            indexing="8.1."
                            title="Cross-Border Transfers"
                            text={`Klak Technologies Limited may also engage third parties abroad 
                                (such as other financial institutions, contractors, government-authorized agencies, etc.) 
                                that will receive personal data for certain purpose(s) as part of Klak Technologies Limited's processing 
                                activities and process them on Klak Technologies Limited's behalf. Where this is the case, 
                                Klak Technologies Limited will enter into a Data Processing Agreement with the third party 
                                and also ask for your consent if the purpose of processing was not initially stated on inception 
                                and be satisfied that the third party has adequate measures in place to protect the data against 
                                accidental or unauthorized access, use, disclosure, loss, or destruction.
                                In such a case where the disclosure is to third parties outside the jurisdiction of the NDPA, 
                                Klak Technologies Limited will ensure that the third party meets the core global regulatory 
                                standards prior to the transfer. This may include transferring the personal data to the third 
                                party where Klak Technologies Limited is satisfied that:
                            `}
                            content={[
                                `The country of the recipient has adequate data protection controls established by legal or self-regulatory regime. 
                                However, in a case not covered by an adequacy decision from the NDPC;`,
                                `It has a contract in place that uses existing data protection clauses with the approval of NDPC to ensure adequate protection`,
                                `It is making the transfer under approved binding corporate rules`,
                                `Provisions are inserted into administrative arrangements between public 
                                authorities or bodies authorized by the supervisory authority NDPC`
                            ]}
                        />
                        <LegalItem
                            hash="retention"
                            indexing="9."
                            title="Retention of Records"
                            text={`Klak Technologies Limited stores a broad spectrum of personal information, 
                                which indicates that retention periods differ with the type of data collected and stored.
                                All information Klak Technologies Limited holds is stored, retained, and destroyed 
                                in compliance with NDPA's guidelines on the retention of records and personal data.
                                Klak Technologies Limited will retain your personal data as long as the information 
                                is active on our systems and necessary for service delivery purposes. 
                                This retention period is verified and established with special considerations to the following areas:
                            `}
                            content={[
                                `The requirements of Klak Technologies Limited`,
                                `The type of personal data`,
                                `The purpose of processing`,
                                `Lawful basis for processing`,
                                `The categories of data subjects`,
                            ]}
                            node={
                                <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                    Details of personal data retention periods for the different categories of personal
                                    data are captured in the Records of Processing Activities document (internal document)
                                    This retention period is established to enable Klak Technologies Limited use the
                                    personal data for the necessary legitimate purposes identified, in full
                                    compliance with the regulatory requirements. When the personal data is no
                                    longer needed or beyond the stipulated retention period, Klak Technologies Limited
                                    will delete or destroy it from its systems and records, or take steps to securely
                                    archive it while protecting your identity and privacy rights as the case may be.

                                </article>
                            }
                        />
                        <LegalItem
                            hash="data-rights"
                            indexing="10."
                            title="Data Subject Rights"
                            text={`At any point while Klak Technologies Limited is in possession of or processing personal data, the data subject, has the right to:`}
                            content={[
                                `Request a copy of the information that Klak Technologies Limited holds about them`,
                                `Correct the data that is inaccurate or incomplete`,
                                `Ask for their data to be erased from Klak Technologies Limited systems/records`,
                                `Restrict the processing of their data where certain conditions apply`,
                                `Have their data transferred to another organization`,
                                `Object to certain types of processing like direct marketing`,
                                `Object to automated processing like profiling, as well as the right to be subject to 
                                    the legal effects of automated processing or profiling`,
                                `Complain and pursue judicial review if Klak Technologies Limited refuses their 
                                request under rights of access without a clear and justifiable reason as to why`,
                            ]}
                            node={
                                <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                    All of the above requests will be forwarded should there be a third party involved in the processing of your data
                                </article>
                            }
                        />
                        <LegalItem
                            hash="complaints"
                            indexing="11."
                            title="Complaints"
                            text={`If for any reason a customer or staff wishes to make a complaint about how Klak Technologies Limited 
                                (or any of Klak Technologies Limited's third parties) handles or have handled their personal data, 
                                or how their complaint has been handled, they have the right to lodge a complaint directly Klak Technologies Limited Data Protection Officer.
                                Below is the contact detail:
                            `}
                            node={
                                <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                    Data Protection Officer (DPO) Email:hello@useklak.com
                                </article>
                            }
                        />
                    </section>
                </article>
            </div>

            <nav className="w-full h-fit hidden xl:flex xl:w-2/6 p-6 rounded-xl border border-[#EAEAEA] sticky top-20 flex-col gap-6">
                <p className="text-sm text-primary-200 font-extrabold">Table of Content</p>

                <div className="flex flex-col gap-4 scroll-smooth">
                    {
                        contentNav?.map((item, index) => {
                            return (
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(item.hash).scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="uppercase text-xs flex items-start gap-1 cursor-pointer hover:text-primary-200" href={`#${item.hash}`} key={item.id} >
                                    <span>{item.num}.</span>
                                    {item.title}
                                </a>
                            )
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export const LegalItem = ({ indexing, title, text, content, node, hash }) => {
    return (
        <div id={hash} className="flex flex-col gap-4 scroll-mt-36">
            <div className="flex items-start gap-2">
                <span className="text-sm font-bold leading-none">{indexing}</span>
                <p className="uppercase text-sm font-bold leading-4">{title}</p>
            </div>
            <article className="text-sm font-medium text-[#646668] text-wrap break-words">{text}</article>
            {Array.isArray(content) ? (
                <ul className="flex flex-col px-8">
                    {content.map((item, index) => (
                        <li className="list-disc text-sm font-medium text-[#646668] text-wrap break-words" key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <article className="text-sm font-medium text-[#646668] text-wrap break-words">{content}</article>
            )}
            <div>
                {!!node && node}
            </div>
        </div>
    )
}