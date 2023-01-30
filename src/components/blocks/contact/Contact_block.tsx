import { ContactItem, IProps } from 'src/models';
import './contact_block.scss'

interface IContactBlock {
    image: JSX.Element
    header: string
    links: ContactItem[]
}

const ContactBlock: React.FC<IContactBlock> = (props: IContactBlock): JSX.Element => {
    return (
        <div className="contact-block">
            <div className="img-container">
                {props.image}
            </div>
            <div className="contact-info">
                <span>{props.header}</span>
                {props.links?.map((link: ContactItem, index: number) => <a href={link.link} key={index} target={link.newWindow ? "_blank" : null}>{link.text}</a>)}
            </div>
        </div>
    )
}

export default ContactBlock;
