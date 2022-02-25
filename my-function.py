def lambda_handler(event, context):
    # TODO implement
    keyword = ''
    if event['queryStringParameters']['keyword']:
        keyword = event['queryStringParameters']['keyword']
    return {
        'statusCode': 200,
        'body': 'Aniket Varade says ' + keyword
    }
