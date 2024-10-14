import { randomId } from "../../../helpers/random-id"

export const TermsOfUse = () => {

    const contentNav = [
        {
            id: randomId(),
            title: "Who we are and how to contact us",
            hash: "contact"
        },
        {
            id: randomId(),
            title: "By using our site you accept these terms",
            hash: "accept"
        },
        {
            id: randomId(),
            title: "We may make changes to these terms",
            hash: "terms-change"
        },
        {
            id: randomId(),
            title: "We may make changes to our site",
            hash: "site-change"
        },
        {
            id: randomId(),
            title: "We may suspend or withdraw our site",
            hash: "suspend-site"
        },
        {
            id: randomId(),
            title: "We may transfer this agreement to someone else",
            hash: "transfer"
        },
        {
            id: randomId(),
            title: "You must keep your account details safe",
            hash: "account-safe"
        },
        {
            id: randomId(),
            title: "How you may use material on our site",
            hash: "material"
        },
        {
            id: randomId(),
            title: "No text, data mining, or web scraping",
            hash: "crawlers"
        },
        {
            id: randomId(),
            title: "Do not rely on information on this site",
            hash: "info"
        },
        {
            id: randomId(),
            title: "We are not responsible for websites we link to",
            hash: "external-link"
        },
        {
            id: randomId(),
            title: "User-generated content is not approved by us",
            hash: "generated-content"
        },
        {
            id: randomId(),
            title: "How to complain about content uploaded by other users",
            hash: "content-complain"
        },
        {
            id: randomId(),
            title: "Our responsibility for loss or damage suffered by you",
            hash: "loss-damage"
        },
        {
            id: randomId(),
            title: "How we may use your personal information",
            hash: "personal-info"
        },
        {
            id: randomId(),
            title: "Uploading content to our site",
            hash: "content-upload"
        },
        {
            id: randomId(),
            title: "Rights you are giving us to use material you upload",
            hash: "upload-rights"
        },
        {
            id: randomId(),
            title: "Which country's laws apply to any disputes?",
            hash: "country-law"
        },
    ]

    return (
        <div className="w-full flex gap-4">
            <div className="w-full xl:w-4/6 p-6 rounded-xl border border-[#EAEAEA] flex flex-col gap-6">
                <p className="text-sm text-primary-200 font-extrabold">Terms of use</p>

                <article className="flex flex-col gap-6">
                    <section className="flex flex-col gap-4">
                        <LegalItem
                            hash="contact"
                            indexing="1."
                            title="Who we are and how to contact us"
                            text={`www.useklak.com is a site operated by Klak Technologies Limited ("We").
                                We are registered in the Federal Republic of Nigeria with the registration number 
                                7372982 and have our registered office at no 16, Block B, Idowu Martin, Victoria Island, Lagos.
                                To contact us, please email hello@useklak.com.
                            `}
                        />
                        <LegalItem
                            hash="accept"
                            indexing="2."
                            title="By using our site you accept these terms"
                            text={`By using our site, you confirm that you accept these terms of use and that you agree to comply with them.
                                If you do not agree to these terms, you must not use our site.
                                We recommend that you print a copy of these terms for future reference.

                            `}
                        />
                        <LegalItem
                            hash="terms-change"
                            indexing="3."
                            title="We may make changes to these terms"
                            text={`We amend these terms from time to time. Every time you wish to use our site,
                                please check these terms to ensure you understand the terms that apply at that time.


                            `}
                        />
                        <LegalItem
                            hash="site-change"
                            indexing="4."
                            title="We may make changes to our site"
                            text={`We may update and change our site from time to time to reflect changes to our products,
                                our users' needs, and our business priorities We will try to give you reasonable notice of any major changes.
                            `}
                        />
                        <LegalItem
                            hash="suspend-site"
                            indexing="5."
                            title="We may suspend or withdraw our site"
                            text={`Our site is made available free of charge.
                                We do not guarantee that our site, or any content on it, will always be available or be uninterrupted.
                                We may suspend, withdraw, or restrict the availability of all or any part of our site for business and operational reasons.
                                We will try to give you reasonable notice of any suspension or withdrawal.
                                You are also responsible for ensuring that all persons who access our site 
                                through your internet connection are aware of these terms of use and other applicable terms and conditions and that they comply with them.

                            `}
                        />
                        <LegalItem
                            hash="transfer"
                            indexing="6."
                            title="We may transfer this agreement to someone else"
                            text={`We may transfer our rights and obligations under these terms to another organization. 
                                We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract.
                            `}
                        />
                        <LegalItem
                            hash="account-safe"
                            indexing="7."
                            title="You must keep your account details safe"
                            text={`If you choose, or you are provided with, a user identification code, password, 
                                or any other piece of information as part of our security procedures, you must treat such information as confidential.
                                You must not disclose it to any third party.
                                We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, 
                                if in our reasonable opinion, you have failed to comply with any of the provisions of these terms of use.
                                If you know or suspect that anyone other than you knows your user identification code or password, 
                                you must promptly notify us at hello@useklak.com.

                            `}
                        />
                        <LegalItem
                            hash="material"
                            indexing="8."
                            title="How you may use material on our site"
                            text={`We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. 
                                    Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
                                    You may print off one copy and may download extracts, of any page(s) from our site for your personal use and you may draw the attention 
                                    of others within your organization to content posted on our site.
                                    You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, 
                                    photographs, video or audio sequences, or any graphics separately from any accompanying text.
                                    Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged (except where the content is user-generated).
                                    You must not use any part of the content on our site for commercial purposes without obtaining a license to do so from us or our licensors.
                                    If you print off, copy, download, share, or repost any part of our site in breach of these terms of use, 
                                    your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.


                            `}
                        />
                        <LegalItem
                            hash="crawlers"
                            indexing="9."
                            title="No text, data mining, or web scraping"
                            text={`You shall not conduct, facilitate, authorize, or permit any text or data mining or web scraping in relation to our site 
                                or any services provided via, or in relation to, our site. This includes using (or permitting, authorizing, or attempting the use of):
                                Any "robot", "bot", "spider", "scraper" or other automated device, program, tool, algorithm, code, process or methodology to access, 
                                obtain, copy, monitor, or republish any portion of the site or any data, content, information or services accessed via the same.
                                Any automated analytical technique aimed at analyzing text and data in digital form to generate information which 
                                includes but is not limited to patterns, trends, and correlations.
                                The provisions in this clause should be treated as an express reservation of our rights in this regard.
                                This clause shall not apply insofar as (but only to the extent that) we are unable to exclude or limit text or
                                data mining or web scraping activity by contract under the laws which are applicable to us.
                            `}
                        />
                        <LegalItem
                            hash="info"
                            indexing="10."
                            title="Do not rely on information on this site"
                            text={`The content on our site is provided for general information only. 
                                It is not intended to amount to advice on which you should rely. 
                                You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.
                                Although we make reasonable efforts to update the information on our site, 
                                we make no representations, warranties, or guarantees, whether express or implied, that the content on our site is accurate, complete, or up to date.
                            `}
                        />
                        <LegalItem
                            hash="external-link"
                            indexing="11."
                            title="We are not responsible for websites we link to"
                            text={`Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. 
                                Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.
                                We have no control over the contents of those sites or resources.
                            `}
                        />
                        <LegalItem
                            hash="generated-content"
                            indexing="12."
                            title="User-generated content is not approved by us"
                            text={`This website may include information and materials uploaded by other users of the site, 
                                including bulletin boards and chat rooms. This information and these materials have not been verified or approved by us. 
                                The views expressed by other users on our site do not represent our views or values.
                            `}
                        />
                        <LegalItem
                            hash="content-complain"
                            indexing="13."
                            title="How to complain about content uploaded by other users"
                            text={`TIf you wish to complain about content uploaded by other users, please contact us on hello@useklak.com`}
                        />
                        <LegalItem
                            hash="loss-damage"
                            indexing="14."
                            title="Our responsibility for loss or damage suffered by you"
                            node={
                                <div className="flex flex-col gap-2">
                                    <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                        We exclude all implied conditions, warranties, representations, or other terms that may apply to our site or any content on it.
                                        We will not be liable to you for any loss or damage, whether in contract, tort (including negligence),
                                        breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:
                                    </article>
                                    <ul className="flex flex-col list-disc px-8">
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">use of, or inability to use, our site; or</li>
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">use of or reliance on any content displayed on our site</li>
                                    </ul>

                                    <article className="text-sm font-medium text-[#646668] text-wrap break-words">
                                        In particular, we will not be liable for:
                                    </article>
                                    <ul className="flex flex-col list-disc px-8">
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">loss of profits, sales, business, or revenue;</li>
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">business interruption;</li>
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">loss of anticipated savings;</li>
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">loss of business opportunity, goodwill, or reputation; or</li>
                                        <li className="text-sm font-medium text-[#646668] text-wrap break-words">any indirect or consequential loss or damage</li>
                                    </ul>
                                </div>
                            }
                        />
                        <LegalItem
                            hash="personal-info"
                            indexing="15."
                            title="How we may use your personal information"
                            text={`We will only use your personal information as set out in our Privacy Policy.`}
                        />
                        <LegalItem
                            hash="content-upload"
                            indexing="16."
                            title="Uploading content to our site"
                            text={`Whenever you make use of a feature that allows you to upload content to our site, or to make contact with other users of our site, 
                                you must comply with the content standards set out herein.
                                You warrant that any such contribution does comply with our standards, and you will be liable to us and indemnify us for any breach of that warranty. 
                                This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.
                                Any content you upload to our site will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, 
                                but you are required to grant us and other users of our site a limited license to use, store, and copy that content 
                                and to distribute and make it available to third parties.
                                We also have the right to disclose your identity to any third party who is claiming that any content posted or 
                                uploaded by you to our site constitutes a violation of their intellectual property rights or their right to privacy.
                                We have the right to remove any posting you make on our site if, in our opinion, your post does not comply with our content standards.
                                You are solely responsible for securing and backing up your content.
                                We do not store terrorist content.
                            `}
                        />
                        <LegalItem
                            hash="upload-rights"
                            indexing="17."
                            title="Rights you are giving us to use material you upload"
                            text={`When you upload or post content to our site, you grant us the following rights to use that content:`}
                            content={[
                                `a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, display,
                                    and perform that user-generated content in
                                    connection with the service provided by the website and across different media, including to promote the site or the service forever;`,
                                `We are not responsible for viruses and you must not introduce them`,
                                `We do not guarantee that our site will be secure or free from bugs or viruses`,
                                `You are responsible for configuring your information technology, computer programs, and platform to access our site. 
                                    You should use your own virus protection software`,
                                `You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs, or other material
                                    that is malicious or technologically harmful. You must not attempt to gain unauthorized access to our site,
                                    the server on which our site is stored or any server, computer, or database connected to our site.
                                    You must not attack our site via a denial-of-service attack or a distributed denial-of-service attack.
                                    We will report any such breach to the relevant law enforcement
                                    authorities and we will co-operate with those authorities by disclosing your identity to them. 
                                    In the event of such a breach, your right to use our site will cease immediately.`
                            ]}
                        />
                        <LegalItem
                            hash="country-law"
                            indexing="18."
                            title="Which country's laws apply to any disputes?"
                            text={`If you are a consumer, please note that these terms of use, their subject matter, and their formation, 
                                are governed by the laws of the Federal Republic of Nigeria. You and we both agree that the courts of the 
                                Federal Republic of Nigeria will have exclusive jurisdiction.
                                If you are a business, these terms of use, their subject matter, and their formation (and any non-contractual 
                                disputes or claims) are governed by the laws of the Federal Republic of Nigeria. We both agree to the exclusive 
                                jurisdiction of the courts of the Federal Republic of Nigeria.
                            `}
                        />
                    </section>
                </article>
            </div>

            <nav className="w-full h-fit hidden xl:flex xl:w-2/6 p-6 rounded-xl border border-[#EAEAEA] sticky top-20 flex-col gap-6">
                <p className="text-sm text-primary-200 font-extrabold">Table of Content</p>

                <div className="flex flex-col gap-4">
                    {
                        contentNav?.map((item, index) => {
                            return (
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(item.hash).scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="uppercase text-xs flex items-start gap-1 cursor-pointer hover:text-primary-200" href={`#${item.hash}`} key={item.id} >
                                    <span>{index + 1}.</span>
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
            <div>
                {!!node && node}
            </div>
            {Array.isArray(content) ? (
                <ul className="flex flex-col px-8">
                    {content.map((item, index) => (
                        <li className="list-disc text-sm font-medium text-[#646668] text-wrap break-words" key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <article className="text-sm font-medium text-[#646668] text-wrap break-words">{content}</article>
            )}
        </div>
    )
}