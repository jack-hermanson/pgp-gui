import { FunctionComponent } from "react";
import { Card, CardBody, Input } from "reactstrap";
import { ActionCardHeader } from "jack-hermanson-component-lib";

interface Props {
    title: string;
    message: string;
    rows?: number;
}

export const MessageCard: FunctionComponent<Props> = ({
    title,
    message,
    rows = 11,
}: Props) => {
    return (
        <Card>
            <ActionCardHeader title={title} />
            <CardBody>
                <Input type="textarea" rows={rows} readOnly value={message} />
            </CardBody>
        </Card>
    );
};
