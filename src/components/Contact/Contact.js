import { useState, useEffect, useCallback } from "react";
import "./Contact.css";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

function Contact() {
	return (
		<div className="contact">
			<h1 className="contact-title">Me contacter</h1>
			<br />
			<div className="contact-group">
				<label>Nom</label>
				<br />
				<input type="text" placeholder="Votre nom" name="username" />
				<br />
				<br />
				<label>Mail</label>
				<br />
				<input type="text" placeholder="Votre mail" name="usermail" />
				<br />
				<br />
				<label>Sujet</label>
				<br />
				<input type="text" placeholder="Sujet" name="subject" />
				<br />
				<br />
				<label>Message</label>
				<br />
				<input type="text" placeholder="Votre message" name="message" />
				<br />
				<Button>Valider</Button>
			</div>
		</div>
	);
}

export default Contact;
