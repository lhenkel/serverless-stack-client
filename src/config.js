export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_eNulLBF50JhKaMBRLoQjsfr200jmKB41B1",
    s3: {
        REGION: "us-east-2",
        BUCKET: "com.henkelsoft.notes"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://a1r9o3q3kl.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_KGz36TNqc",
        APP_CLIENT_ID: "5m7kqbvsrmkjpa4opb7vfjheet",
        IDENTITY_POOL_ID: "us-east-2:99acae9d-08c7-4e70-a27f-01bce37faa6e"
    }
};