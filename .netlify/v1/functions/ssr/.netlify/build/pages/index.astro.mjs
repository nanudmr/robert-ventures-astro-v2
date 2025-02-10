import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_DX3Ct7Tn.mjs';
import 'kleur/colors';
import { a as $$Header, $ as $$BaseHead } from '../chunks/Header_D06FuaVQ.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DaG9i4bq.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BFr7Uugx.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const marvin = new Proxy({"src":"/_astro/marvin-gordon.rL8HkIXl.png","width":160,"height":160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/eduardodematos/Documents/GitHub/robert-ventures-astro/src/images/testimonials/marvin-gordon.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6> <head>', "", "</head> <body data-astro-cid-j7pv25f6> <!-- <Header />\n\n		<main>\n			<Herobox />\n			<BlackBanner />\n			<Benefits />\n			<Calculator />\n		</main>\n		<Footer /> --> ", ' <main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Open Your Account in Under 3 Minutes</h1> <form id="signup-form" action="/api/signup" method="post" data-astro-cid-j7pv25f6> <div class="group" data-astro-cid-j7pv25f6> <input type="text" name="first_name" placeholder="First Name" required data-astro-cid-j7pv25f6> <input type="text" name="last_name" placeholder="Last Name" required data-astro-cid-j7pv25f6> </div> <input type="email" name="email" placeholder="Email" required data-astro-cid-j7pv25f6> <input type="password" name="password" placeholder="Password" required data-astro-cid-j7pv25f6> <p class="password-length" data-astro-cid-j7pv25f6>Password must be at least 8 character long.</p> <p class="password-character" data-astro-cid-j7pv25f6>Password must contain at least one special character.</p> <!-- <select name="how_did_they_hear">\n						<option selected hidden value="null">Select one</option>\n						<option value="facebook">Facebook</option>\n						<option value="instagram">Instagram</option>\n						<option value="friend">Friend</option>\n						<option value="newsletter">Newsletter</option>\n						<option value="google">Google</option>\n					</select> --> <button type="submit" data-astro-cid-j7pv25f6>Sign Up</button> </form> <p class="disclaimer" data-astro-cid-j7pv25f6>\nBy continuing, you agree to our <a href="" data-astro-cid-j7pv25f6>Privacy Policy</a> and\n<a href="" data-astro-cid-j7pv25f6>Terms of Use</a> </p> <div class="testimonials" data-astro-cid-j7pv25f6> <div class="testimonial-photos" data-astro-cid-j7pv25f6> ', ' </div> <p class="testimonial" data-astro-cid-j7pv25f6>\u201CI\'ve known Joe for over a decade now and he has been more than just a friend but has been instrumental in our holding company to make accountable double-digit returns and has been a blessing. Always could count on him for the payments.\u201D</p> <p class="testimonial-name" data-astro-cid-j7pv25f6>Steve Lloyd</p> </div> </main> <!-- <Footer /> --> <script>\n    async function authenticateWithWealthBlock(formData) {\n        try {\n            const response = await fetch("/api/wealthblock", {\n                method: "POST",\n                body: formData,\n            });\n\n            const textData = await response.text();\n            console.log("\u{1F50D} WealthBlock Raw Response:", textData);\n\n            if (!response.ok) {\n                console.error("\u274C WealthBlock API Error:", textData);\n                return null;\n            }\n\n            try {\n                const jsonData = JSON.parse(textData);\n                console.log("\u2705 WealthBlock Parsed JSON:", jsonData);\n                return jsonData;\n            } catch (parseError) {\n                console.warn("\u26A0 WealthBlock returned a non-JSON response. Ignoring parsing error.");\n                return textData;\n            }\n        } catch (error) {\n            console.error("\u274C Error during WealthBlock authentication:", error);\n            return null;\n        }\n    }\n\n    document.addEventListener("DOMContentLoaded", () => {\n        const form = document.getElementById("signup-form");\n        const passwordInput = form.querySelector("input[name=\'password\']");\n        const passwordLengthMsg = document.querySelector(".password-length");\n        const passwordCharMsg = document.querySelector(".password-character");\n\n\n        form.addEventListener("submit", async (e) => {\n            e.preventDefault();\n\n            const formData = new FormData(form);\n            const password = formData.get("password") || "";\n\n            // \u2705 Check if password is at least 8 characters long\n            const isLongEnough = password.length >= 8;\n            passwordLengthMsg.style.display = isLongEnough ? "none" : "block";\n\n            // \u2705 Check if password contains at least one special character\n            const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;\n            const hasSpecialChar = specialCharRegex.test(password);\n            passwordCharMsg.style.display = hasSpecialChar ? "none" : "block";\n\n            // \u2705 Stop submission if any validation fails\n            if (!isLongEnough || !hasSpecialChar) {\n                console.warn("\u26A0 Password validation failed.");\n                return;\n            }\n\n            try {\n                /*\n                // \u2705 Temporarily disabled WealthBlock authentication for testing\n                const wealthBlockAuth = await authenticateWithWealthBlock(formData);\n                \n                if (!wealthBlockAuth) {\n                    console.warn("\u26A0 Authentication with WealthBlock failed. Please try again.");\n                    return;\n                }\n                */\n\n                // \u2705 Attempt to fetch the IP address but do not block signup if it fails\n                try {\n                    const ipResponse = await fetch("https://api64.ipify.org?format=json");\n                    if (ipResponse.ok) {\n                        const ipData = await ipResponse.json();\n                        formData.append("ip_address", ipData.ip);\n                        console.log("\u2705 IP Address Added:", ipData.ip);\n                    } else {\n                        console.warn("\u26A0 Failed to fetch IP address. Continuing signup...");\n                    }\n                } catch (err) {\n                    console.warn("\u26A0 Error fetching IP address. Skipping...");\n                }\n\n                // \u2705 Submit form data to backend\n                const response = await fetch(form.action, {\n                    method: form.method,\n                    body: formData,\n                });\n\n                const result = await response.json();\n\n                if (!response.ok) {\n                    console.error(`\u274C Signup failed: ${result.error}`);\n                    return;\n                }\n\n                if (result.session) {\n                    localStorage.setItem("supabase_token", result.session.access_token);\n                }\n\n                // \u2705 Ensure GoHighLevel Contact ID is stored in localStorage\n                if (result.ghl_id) {\n                    localStorage.setItem("ghl_contact_id", result.ghl_id);\n                    console.log("\u2705 Stored GHL Contact ID:", result.ghl_id);\n                } else {\n                    console.warn("\u26A0 No GoHighLevel Contact ID received!");\n                }\n\n                console.log("\u2705 Signup successful! Redirecting...");\n                window.location.href = "/signup-step-2"; // Proceed to next step\n            } catch (err) {\n                console.error("\u274C Error during signup:", err);\n            }\n        });\n    });\n<\/script></body></html>'], ['<html lang="en" data-astro-cid-j7pv25f6> <head>', "", "</head> <body data-astro-cid-j7pv25f6> <!-- <Header />\n\n		<main>\n			<Herobox />\n			<BlackBanner />\n			<Benefits />\n			<Calculator />\n		</main>\n		<Footer /> --> ", ' <main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Open Your Account in Under 3 Minutes</h1> <form id="signup-form" action="/api/signup" method="post" data-astro-cid-j7pv25f6> <div class="group" data-astro-cid-j7pv25f6> <input type="text" name="first_name" placeholder="First Name" required data-astro-cid-j7pv25f6> <input type="text" name="last_name" placeholder="Last Name" required data-astro-cid-j7pv25f6> </div> <input type="email" name="email" placeholder="Email" required data-astro-cid-j7pv25f6> <input type="password" name="password" placeholder="Password" required data-astro-cid-j7pv25f6> <p class="password-length" data-astro-cid-j7pv25f6>Password must be at least 8 character long.</p> <p class="password-character" data-astro-cid-j7pv25f6>Password must contain at least one special character.</p> <!-- <select name="how_did_they_hear">\n						<option selected hidden value="null">Select one</option>\n						<option value="facebook">Facebook</option>\n						<option value="instagram">Instagram</option>\n						<option value="friend">Friend</option>\n						<option value="newsletter">Newsletter</option>\n						<option value="google">Google</option>\n					</select> --> <button type="submit" data-astro-cid-j7pv25f6>Sign Up</button> </form> <p class="disclaimer" data-astro-cid-j7pv25f6>\nBy continuing, you agree to our <a href="" data-astro-cid-j7pv25f6>Privacy Policy</a> and\n<a href="" data-astro-cid-j7pv25f6>Terms of Use</a> </p> <div class="testimonials" data-astro-cid-j7pv25f6> <div class="testimonial-photos" data-astro-cid-j7pv25f6> ', ' </div> <p class="testimonial" data-astro-cid-j7pv25f6>\u201CI\'ve known Joe for over a decade now and he has been more than just a friend but has been instrumental in our holding company to make accountable double-digit returns and has been a blessing. Always could count on him for the payments.\u201D</p> <p class="testimonial-name" data-astro-cid-j7pv25f6>Steve Lloyd</p> </div> </main> <!-- <Footer /> --> <script>\n    async function authenticateWithWealthBlock(formData) {\n        try {\n            const response = await fetch("/api/wealthblock", {\n                method: "POST",\n                body: formData,\n            });\n\n            const textData = await response.text();\n            console.log("\u{1F50D} WealthBlock Raw Response:", textData);\n\n            if (!response.ok) {\n                console.error("\u274C WealthBlock API Error:", textData);\n                return null;\n            }\n\n            try {\n                const jsonData = JSON.parse(textData);\n                console.log("\u2705 WealthBlock Parsed JSON:", jsonData);\n                return jsonData;\n            } catch (parseError) {\n                console.warn("\u26A0 WealthBlock returned a non-JSON response. Ignoring parsing error.");\n                return textData;\n            }\n        } catch (error) {\n            console.error("\u274C Error during WealthBlock authentication:", error);\n            return null;\n        }\n    }\n\n    document.addEventListener("DOMContentLoaded", () => {\n        const form = document.getElementById("signup-form");\n        const passwordInput = form.querySelector("input[name=\'password\']");\n        const passwordLengthMsg = document.querySelector(".password-length");\n        const passwordCharMsg = document.querySelector(".password-character");\n\n\n        form.addEventListener("submit", async (e) => {\n            e.preventDefault();\n\n            const formData = new FormData(form);\n            const password = formData.get("password") || "";\n\n            // \u2705 Check if password is at least 8 characters long\n            const isLongEnough = password.length >= 8;\n            passwordLengthMsg.style.display = isLongEnough ? "none" : "block";\n\n            // \u2705 Check if password contains at least one special character\n            const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;\n            const hasSpecialChar = specialCharRegex.test(password);\n            passwordCharMsg.style.display = hasSpecialChar ? "none" : "block";\n\n            // \u2705 Stop submission if any validation fails\n            if (!isLongEnough || !hasSpecialChar) {\n                console.warn("\u26A0 Password validation failed.");\n                return;\n            }\n\n            try {\n                /*\n                // \u2705 Temporarily disabled WealthBlock authentication for testing\n                const wealthBlockAuth = await authenticateWithWealthBlock(formData);\n                \n                if (!wealthBlockAuth) {\n                    console.warn("\u26A0 Authentication with WealthBlock failed. Please try again.");\n                    return;\n                }\n                */\n\n                // \u2705 Attempt to fetch the IP address but do not block signup if it fails\n                try {\n                    const ipResponse = await fetch("https://api64.ipify.org?format=json");\n                    if (ipResponse.ok) {\n                        const ipData = await ipResponse.json();\n                        formData.append("ip_address", ipData.ip);\n                        console.log("\u2705 IP Address Added:", ipData.ip);\n                    } else {\n                        console.warn("\u26A0 Failed to fetch IP address. Continuing signup...");\n                    }\n                } catch (err) {\n                    console.warn("\u26A0 Error fetching IP address. Skipping...");\n                }\n\n                // \u2705 Submit form data to backend\n                const response = await fetch(form.action, {\n                    method: form.method,\n                    body: formData,\n                });\n\n                const result = await response.json();\n\n                if (!response.ok) {\n                    console.error(\\`\u274C Signup failed: \\${result.error}\\`);\n                    return;\n                }\n\n                if (result.session) {\n                    localStorage.setItem("supabase_token", result.session.access_token);\n                }\n\n                // \u2705 Ensure GoHighLevel Contact ID is stored in localStorage\n                if (result.ghl_id) {\n                    localStorage.setItem("ghl_contact_id", result.ghl_id);\n                    console.log("\u2705 Stored GHL Contact ID:", result.ghl_id);\n                } else {\n                    console.warn("\u26A0 No GoHighLevel Contact ID received!");\n                }\n\n                console.log("\u2705 Signup successful! Redirecting...");\n                window.location.href = "/signup-step-2"; // Proceed to next step\n            } catch (err) {\n                console.error("\u274C Error during signup:", err);\n            }\n        });\n    });\n<\/script></body></html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result, "Image", $$Image, { "src": marvin, "alt": "A description of my image.", "data-astro-cid-j7pv25f6": true }));
}, "/Users/eduardodematos/Documents/GitHub/robert-ventures-astro/src/pages/index.astro", void 0);

const $$file = "/Users/eduardodematos/Documents/GitHub/robert-ventures-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
