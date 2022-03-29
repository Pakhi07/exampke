import argparse
import requests 
import webbrowser

rover=['curiosity','opportunity','spirit']
parser=argparse.ArgumentParser(description='Enter the date and id of the required image')
parser.add_argument('date',
                    metavar='date',
                    type=str,
                    help='date on which the image was captured')
parser.add_argument('id',
                    metavar='id',
                    type=int,
                    help='id of the image')
args=parser.parse_args()
DATE=args.date
ID=args.id

l=len(rover)
for i in range(l):
    req=requests.get('https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover[i]+'/photos?earth_date='+DATE+'&api_key=hZeojIQJDwcNG4IdcGF93Q1IIssms5cTNa3x8FIu')
    r=req.json()

    for j in range(len(r['photos'])):
        if (r['photos'][j]['id']==ID):
            webbrowser.open(r['photos'][j]['img_src'])
        