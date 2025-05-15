const items = [
  {
    year: '2025',
    projects: [
      {
        title: 'Fraud Detection Using Kafka Streams',
        description: 'Real-time fraud detection pipeline using Apache Kafka and EMR',
        url: 'https://github.com/Sabareh/Fraud-Detection-Using-Kafka-Streams', // Add if there's a link
        active: true,
        icon: 'kafka-streams',
        stats: 'Java · EMR · Apache Kafka',
      },
      {
        title: 'ETL Pipeline with dbt, Snowflake & Airflow',
        description: 'End-to-end data pipeline using dbt, Snowflake, and Apache Airflow',
        url: '', // Add if there's a link
        active: true,
        icon: 'etl-pipeline',
        stats: 'dbt · Snowflake · Airflow · Astronomer',
      },
      {
        title: 'Ethereum Fraud Detection',
        description: 'Detecting fraudulent transactions on the Ethereum blockchain',
        url: 'https://sabareh-ethereum-fraud-detection.streamlit.app/', // Add if there's a link
        active: true,
        icon: 'ethereum-fraud',
        stats: 'Streamlit · Python · Ethereum',
      },
      {
        title: 'NHS Prescription Forecasting with Machine Learning',
        description: 'R machine learning application that performs forecasting on pharmaceutical medicine sales data using information obtained form NHS (UK) General Practitioner (GP) datasets.',
        url: 'https://github.com/Sabareh/Forecasting-ML-App', // Add if there's a link
        active: true,
        icon: 'nhs-forecasting',
        stats: 'R · Machine Learning · NHS',
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        title: 'Hypothesis Testing in Soccer Matches',
        description: 'Statistical test comparing goals in men\'s and women\'s soccer matches',
        url: '', // Add if there's a link
        active: false,
        icon: 'hypothesis-testing',
        stats: 'Significance level: 10%',
      },
      {
        title: 'Retail Recommender System',
        description: 'The Retail Recommender System is a Shiny-based web application that provides recommendations for cross-sell opportunities using association rule mining. Built with R, it analyzes customer transaction data, extracts purchasing patterns, and generates rules for cross-sell recommendations.',
        url: 'https://github.com/Sabareh/Retail-Recommender-System', // Add if there's a link
        active: false,
        icon: 'retail-recommender',
        stats: 'R · Shiny · Association Rule Mining',
      },
      {
        title: 'Product Network Analysis Using R and Shiny',
        description: 'This Shiny web application analyzes product transactions to discover frequently purchased product pairs and visualize the relationships between them. The app uses association rule mining (Apriori algorithm) to identify frequent itemsets, and it applies community detection to find clusters of related products.',
        url: 'https://github.com/Sabareh/Product-Network-Analysis-Using-R', // Add if there's a link
        active: false,
        icon: 'product-network',
        stats: 'R · Shiny · Network Analysis',
      },
      {
        title: 'Stock Prediction with Spark & Cassandra',
        description: 'This is a data pipeline for predicting stock prices using Apache Spark, Apache Cassandra, and machine learning techniques. It collects and preprocesses stock data from Alpha Vantage API, engineers features, trains models, and performs data analysis and predictions.',
        url: 'https://github.com/Sabareh/stock-price-prediction-spark-cassandra', // Add if there's a link
        active: false,
        icon: 'stock-predictor',
        stats: 'Apache Spark · Cassandra · Alpha Vantage',
      },
      {
        title: 'ETL DAG with Airflow for TLD Analysis',
        description: 'Welcome to my repository for building a Directed Acyclic Graph (DAG) using Apache Airflow for analyzing top-level domains (TLDs). This project aims to provide a robust framework for systematically collecting data on TLD usage and performing insightful analyses using Airflows powerful workflow automation capabilities.s.',
        url: 'https://github.com/Sabareh/ETL-DAG-with-Airflow', // Add if there's a link
        active: false,
        icon: 'etl-dag',
        stats: 'Apache Airflow · Python · DAG',
      },
    ],
  },
  {
    year: '2023',
    projects: [
      {
        title: 'Android App Market Analysis',
        description: 'Analyzed 10,000+ apps from Google Play for business insights',
        url: '', // Add if there's a link
        active: false,
        icon: 'android-market',
        stats: 'DataCamp · EDA',
      },
    ],
  },
  {
    year: '2022',
    projects: [
      {
        title: 'GitHub History of Scala',
        description: 'Explored contributions and evolution of Scala via Git logs',
        url: '', // Add if there's a link
        active: false,
        icon: 'scala-history',
        stats: 'Git · GitHub · Data Visualization',
      },
      {
        title: 'Sales Data Engineering in Hadoop',
        description: 'Data ingestion, transformation & loading using Cloudera Hadoop',
        url: '', // Add if there's a link
        active: false,
        icon: 'sales-data-hadoop',
        stats: 'Cloudera · Hadoop · Hive',
      },
      {
        title: 'AI Web Translator',
        description: 'Flask app that translates text using an AI model',
        url: '', // Add if there's a link
        active: false,
        icon: 'ai-translator',
        stats: 'Flask · ML · Python',
      },
      {
        title: 'My Portfolio Website',
        description: 'Personal blog developed during university',
        url: 'sabare.tech', 
        active: false,
        icon: 'personal-blog',
        stats: 'HTML · CSS · JS',
      },
    ],
  },
];

export default items;
