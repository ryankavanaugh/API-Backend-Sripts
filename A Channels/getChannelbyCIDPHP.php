$streamClient = new Client( <key>, <token> );

$channelFilter = [ "cid" => "messaging:forum_3_610af82b08cda" ];
$messageFilter = [ "cid" => "messaging:forum_3_610af82b08cda" ];

$response = $streamClient->search( $channelFilter, $messageFilter );