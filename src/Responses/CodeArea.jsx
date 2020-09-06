import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';

const code = `import http.client
import mimetypes
conn = http.client.HTTPSConnection("localhost", 3000)
conn.request("GET", "/auth/signin", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
`;

export default class CodeResponses extends React.Component {
    state = { code };

    render() {
        return (
            <Editor
                value={this.state.code}
                onValueChange={code => this.setState({ code })}
                highlight={code => highlight(code, languages.python)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
        );
    }
}