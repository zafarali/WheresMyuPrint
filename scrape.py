from bs4 import BeautifulSoup
import urllib2
url = "http://kb.mcgill.ca/kb/article?articleid=2656&source=article&cid=2&islink=true"
page = urllib2.urlopen(url).read()
soup = BeautifulSoup(page)
f = open("public/public.json", "w")
f.write("[")
end = False
for table in soup.find('table', {"id": "kbTable"}):
	if end: break
	for tr in soup.find_all('tr')[1:]:
		if end: break
		tds = tr.find_all('td')
		try:
			if tds[3].p == None: 
				guest = "false" 
			else: 
				guest= "true"
			if tds[4].p == None: 
				color="false" 
			else: 
				color="true"
			f.write('{"building": "%s", "floor": "%s", "location": "%s", "guest": %s, "color": %s },' % \
				(tds[0].text, tds[1].text[0], tds[2].text, guest, color))
		except IndexError:
			end = True;
f.write("{}]")
f.close()
