<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RSVP Confirmation - Aura Events</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #faf9f6;
            font-family: 'Outfit', sans-serif;
            color: #374151;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: min-content;
            height: 100vh;
        }
        .card {
            background-color: #ffffff;
            border-radius: 32px;
            padding: 50px 40px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
            border: 1px solid #f0eae1;
            margin: 20px;
        }
        .icon-wrapper {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px auto;
        }
        .icon-confirmed {
            background-color: #ecfdf5;
            color: #10b981;
        }
        .icon-declined {
            background-color: #fef2f2;
            color: #ef4444;
        }
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            font-weight: 700;
            color: #111827;
            margin: 0 0 16px 0;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
            color: #6b7280;
            margin: 0 0 35px 0;
        }
        .status-pill {
            display: inline-block;
            padding: 8px 20px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 100px;
            margin-bottom: 25px;
        }
        .pill-confirmed {
            background-color: #ecfdf5;
            color: #065f46;
            border: 1px solid #a7f3d0;
        }
        .pill-declined {
            background-color: #fef2f2;
            color: #991b1b;
            border: 1px solid #fecaca;
        }
        .divider {
            height: 1px;
            background-color: #f3efea;
            margin: 30px 0;
        }
        .branding {
            font-family: 'Playfair Display', serif;
            font-size: 18px;
            font-weight: 700;
            color: #6355d8;
        }
        .tagline {
            font-size: 11px;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="card">
        @if($status === 'confirmed')
            <div class="icon-wrapper icon-confirmed">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="status-pill pill-confirmed">Attending</div>
            <h1>Splendid News!</h1>
            <p>
                Thank you, <strong>{{ $guest->name }}</strong>! Your RSVP for <strong>{{ $event->title }}</strong> has been successfully confirmed. We are absolutely thrilled to celebrate this memorable day with you!
            </p>
        @else
            <div class="icon-wrapper icon-declined">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div class="status-pill pill-declined">Declined</div>
            <h1>Thank You</h1>
            <p>
                Thank you, <strong>{{ $guest->name }}</strong>, for letting us know. We are sorry you won't be able to join us for <strong>{{ $event->title }}</strong>, but we completely understand and appreciate your quick response.
            </p>
        @endif

        <div class="divider"></div>
        
        <div class="branding">Aura Events</div>
        <div class="tagline">Crafting Majestic Realities</div>
    </div>
</body>
</html>
