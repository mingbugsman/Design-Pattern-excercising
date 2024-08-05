class Email {
    constructor(builder) {
        this.from = builder.from;
        this.to = builder.to;
        this.subject = builder.subject; // chủ đề
        this.body = builder.body;
        this.attachments = builder.attachments; 
    }
    send() {
        console.log(`Sending email ${this.from} to ${this.to} with subject "${this.subject}"`)
    }
}


class EmailBuilder {
    constructor(from ,to ) {
        this.from = from;
        this.to = to;
        this.attachments = [];
    }

    setSubject(subject) {
        this.subject = subject;
        return this;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
    addAttachment(attachments) {
        this.attachments.push(attachments);
        return this;
    }
    build() {
        return new Email(this);
    }
}

const email = new EmailBuilder('ming18380@example.com', 'kujojotaro722@example.com')
  .setSubject('Hello World')
  .setBody('This is a test email.')
  .addAttachment('file1.txt')
  .addAttachment('file2.pdf')
  .build();

email.send();