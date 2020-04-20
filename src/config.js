const dev = {
    STRIPE_KEY: "pk_test_eNulLBF50JhKaMBRLoQjsfr200jmKB41B1",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-vg4a90jshikd"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://2z55y58n62.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_2kKklLdqN",
        APP_CLIENT_ID: "34e9kptne291p770648bcmoarb",
        IDENTITY_POOL_ID: "us-east-2:34ca4eb3-3887-44f5-89e5-409aca93ee88"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_eNulLBF50JhKaMBRLoQjsfr200jmKB41B1",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-1qytm3wlf6a98"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://xvf9bmsjq4.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_BgchoQwHZ",
        APP_CLIENT_ID: "826t4r8t4atgvuvdk2ohibhpn",
        IDENTITY_POOL_ID: "us-east-2:fc811874-cd33-4efd-a436-165a2aafcac5"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};