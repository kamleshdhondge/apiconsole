export default {
    apiUrl: "/getCannibalizationClusters",
    title: "title for getCannibalizationClusters api",
    description: "This will be a description",
    httpMethod: "POST",
    APICategory: "similarity",
    sampleio: {
        inputJson: {
            "id": "1000",
            "isSystemAvatar": true,
            "isSelected": false,
            "isDeletable": false,
            "urls": {
                "16x16": "/secure/useravatar?size=xsmall&avatarId=10040&avatarType=project",
                "24x24": "/secure/useravatar?size=small&avatarId=10040&avatarType=project",
                "32x32": "/secure/useravatar?size=medium&avatarId=10040&avatarType=project",
                "48x48": "/secure/useravatar?avatarId=10040&avatarType=project"
            }
        },
        outputJson: {
            "id": "1000",
            "isSystemAvatar": true,
            "isSelected": false,
            "isDeletable": false,
            "urls": {
                "16x16": "/secure/useravatar?size=xsmall&avatarId=10040&avatarType=project",
                "24x24": "/secure/useravatar?size=small&avatarId=10040&avatarType=project",
                "32x32": "/secure/useravatar?size=medium&avatarId=10040&avatarType=project",
                "48x48": "/secure/useravatar?avatarId=10040&avatarType=project"
            }
        },
        ioformat: [{
            type: 'Path/Query/BODY',
            name: 'parameterName',
            isRequired: 'true',
            dataype: 'string',
            validExamples: ' 2011-01-2020'
        }
        ],
        drivercode: {
            codes: [{
                language: "Python",
                codeText: "asd",
            }],
            httpResponses: [{
                code: '200',
                text: 'Returned if Successfull'
            }]

        }

    }
}